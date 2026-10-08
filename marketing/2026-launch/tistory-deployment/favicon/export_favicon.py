#!/usr/bin/env python3
"""Export LegendStudy.com web favicons from the canonical App Icon source.
Requires Pillow. Read-only w.r.t. the source; no network.

Brand authority: the full-orange App Icon finalized in legendstudy-app
`claude/final-store-release-2026-10-08` (commit 8cb7b24) — brand-orange
background (#FFA300) + white notebook/pencil symbol. This does NOT redraw the
mark: it derives a per-pixel symbol-coverage map from the Owner source (blue
channel, anti-aliasing preserved) and does a figure/ground colour-swap, exactly
like the App Icon generator, then exports web sizes.

Favicon-only optical adjustment (allowed): the symbol is placed at 86% (vs the
App Icon's 78%) because the web favicon has no mask safe-zone and benefits from
a slightly larger mark at 16-48px. No geometry/redesign change.

Usage:
    python export_favicon.py --source /path/to/legendstudy_app_iocon_1024.png [--write]
The source is assets/brand/source/legendstudy_app_iocon_1024.png in legendstudy-app.
"""
import argparse
import hashlib
from pathlib import Path
from PIL import Image

HERE = Path(__file__).resolve().parent
ASSETS = HERE / 'assets'
SHA256 = '7f37ed2c16a43f739cfcb618190bacedaaacdb7877dcf000578f8b6611e25a68'
ORANGE = (255, 163, 0)          # #FFA300 — AppTokens.primary (matches the App Icon)
FAV_SCALE = 0.86                # favicon-only optical size (no mask safe-zone on web)
PNG_SIZES = {
    'favicon-16x16.png': 16, 'favicon-32x32.png': 32, 'favicon-48x48.png': 48,
    'apple-touch-icon.png': 180, 'favicon-192x192.png': 192, 'favicon-512x512.png': 512,
}
ICO_SIZES = [(16, 16), (32, 32), (48, 48)]


def coverage_map(source_rgb):
    blue = source_rgb.getchannel('B')
    lut = [max(0, min(255, round((254 - b) * 255 / 254))) for b in range(256)]
    return blue.point(lut)


def render(t, size):
    inner = round(1024 * FAV_SCALE)
    off = (1024 - inner) // 2
    full = Image.new('L', (1024, 1024), 0)
    full.paste(t.resize((inner, inner), Image.Resampling.LANCZOS), (off, off))
    bg = Image.new('RGB', (1024, 1024), ORANGE)
    white = Image.new('RGB', (1024, 1024), (255, 255, 255))
    return Image.composite(white, bg, full).resize((size, size), Image.Resampling.LANCZOS)


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--source', type=Path, required=True)
    ap.add_argument('--write', action='store_true')
    args = ap.parse_args()
    assert hashlib.sha256(args.source.read_bytes()).hexdigest() == SHA256, \
        'source sha256 mismatch — not the canonical App Icon source'
    with Image.open(args.source) as src:
        assert src.size == (1024, 1024)
        t = coverage_map(src.convert('RGB'))
    ASSETS.mkdir(parents=True, exist_ok=True)
    for name, size in PNG_SIZES.items():
        img = render(t, size)
        if args.write:
            img.save(ASSETS / name)
    ico = render(t, 48)
    if args.write:
        ico.save(ASSETS / 'favicon.ico', sizes=ICO_SIZES)
    print(('WROTE ' if args.write else 'OK (dry-run) ') +
          f'{len(PNG_SIZES)} PNGs + favicon.ico ({ICO_SIZES}); orange bg, white symbol @ {int(FAV_SCALE*100)}%')


if __name__ == '__main__':
    main()
