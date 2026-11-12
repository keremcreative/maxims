"""
Geçici arka plan üretici (prototip için).

Gerçek AI görselleri gelene kadar, kod ile çizilmiş sakin manzara resimleri üretir:
gökyüzü, güneş/ay, katman katman dağlar veya kum tepeleri, sis ve hafif film greni.
Sabah sözleri için gündüz renkleri (public/bg/sabah-XX.jpg),
akşam sözleri için gece renkleri (public/bg/aksam-XX.jpg) kullanılır.

Çalıştırma: python3 scripts/make_backgrounds.py
"""
import math
import os
import random

import numpy as np
from PIL import Image, ImageFilter

W, H = 1290, 2796
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "bg")


def hex2rgb(h):
    h = h.lstrip("#")
    return np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float32)


def lerp(a, b, t):
    return a + (b - a) * t


def gradient(stops):
    """stops: [(pos, '#hex'), ...] -> H x 3 dizisi"""
    ys = np.linspace(0, 1, H)
    out = np.zeros((H, 3), np.float32)
    for i in range(len(stops) - 1):
        p0, c0 = stops[i]
        p1, c1 = stops[i + 1]
        m = (ys >= p0) & (ys <= p1)
        t = ((ys[m] - p0) / (p1 - p0))[:, None]
        t = t * t * (3 - 2 * t)
        out[m] = lerp(hex2rgb(c0), hex2rgb(c1), t)
    return out


def ridge(rng, base, amp, rough, smooth=False):
    xs = np.linspace(0, 1, W)
    y = np.full(W, base, np.float32)
    octaves = 3 if smooth else 7
    for o in range(octaves):
        f = (1.3 if smooth else 2.0) * (2 ** o)
        a = amp / (2 ** (o * (1.4 if smooth else rough)))
        y += a * np.sin(xs * f * math.pi + rng.uniform(0, 6.28))
        y += a * 0.5 * np.sin(xs * f * 1.7 * math.pi + rng.uniform(0, 6.28))
    return y


def paint(seed, palette, kind, night):
    rng = random.Random(seed)
    img = np.repeat(gradient(palette["sky"])[:, None, :], W, axis=1)
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)

    # stars
    if night:
        nrng = np.random.default_rng(seed)
        n = 900
        sx = nrng.integers(0, W, n)
        sy = (nrng.random(n) ** 1.6 * H * 0.55).astype(int)
        b = nrng.random(n) ** 3 * 200
        for x, y, v in zip(sx, sy, b):
            img[y, x] = np.minimum(255, img[y, x] + v)

    # sun / moon glow
    cx = W * rng.uniform(0.25, 0.75)
    cy = H * palette.get("sun_y", 0.42)
    r = W * (0.06 if night else 0.09)
    d = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
    glow = np.exp(-(d / (r * 6)) ** 2)[..., None]
    img = lerp(img, hex2rgb(palette["glow"]), glow * 0.55)
    disc = np.clip((r - d) / 3, 0, 1)[..., None]
    img = lerp(img, hex2rgb(palette["sun"]), disc)

    # layers
    layers = palette["layers"]
    horizon = palette.get("horizon", 0.5)
    for i, col in enumerate(layers):
        t = i / max(1, len(layers) - 1)
        base = H * (horizon + t * 0.32)
        amp = H * (0.035 + 0.05 * (1 - t)) * (0.55 if kind == "dunes" else 1)
        y = ridge(rng, base, amp, 1.15 + 0.2 * t, smooth=(kind == "dunes"))
        mask = (yy >= y[None, :]).astype(np.float32)[..., None]
        c = hex2rgb(col)
        shade = np.clip((yy - y[None, :]) / (H * 0.25), 0, 1)[..., None]
        layer = lerp(c, c * 0.72, shade)
        img = lerp(img, layer, mask)
        # mist above next layer
        mist = np.exp(-((yy - (base + H * 0.04)) / (H * 0.03)) ** 2)[..., None]
        img = lerp(img, hex2rgb(palette["mist"]), mist * 0.18 * (1 - t))

    # slight blur for painterly feel
    im = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    im = im.filter(ImageFilter.GaussianBlur(1.2))
    arr = np.asarray(im).astype(np.float32)

    # vignette + grain
    vx = (xx / W - 0.5)
    vy = (yy / H - 0.5)
    vig = 1 - 0.35 * (vx ** 2 * 2 + vy ** 2 * 1.2)
    arr *= vig[..., None]
    grain = np.random.default_rng(seed + 7).normal(0, 5, (H, W, 1))
    arr += grain
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


MORNING = [
    dict(sky=[(0, "#9fc4e8"), (0.45, "#f6d6b8"), (1, "#f2b98f")], glow="#fff1d6", sun="#fff8ec", mist="#fbe7d3",
         layers=["#c9a9b4", "#a07f98", "#6e5a7a", "#3f3550", "#231f30"]),
    dict(sky=[(0, "#7fb3d5"), (0.5, "#cfe4ef"), (1, "#e8efe9")], glow="#ffffff", sun="#ffffff", mist="#eef5f3",
         layers=["#a9c3c9", "#7fa3ab", "#567f88", "#335a64", "#1b3640"]),
    dict(sky=[(0, "#f4c7a1"), (0.5, "#f9e0c4"), (1, "#f3cf9d")], glow="#fff4dc", sun="#fffaf0", mist="#fbe6c7",
         layers=["#e3b07d", "#cf9361", "#b0744a", "#875536", "#5b3825"], kind="dunes"),
    dict(sky=[(0, "#a8d0db"), (0.5, "#e6eedc"), (1, "#f4e3c2")], glow="#fffbe8", sun="#ffffff", mist="#f3f1e2",
         layers=["#a7bfa0", "#7f9f7c", "#5b7f5e", "#3c5e44", "#22392b"]),
    dict(sky=[(0, "#d7c2e6"), (0.5, "#f5d5d8"), (1, "#fbe1c9")], glow="#fff2e6", sun="#fffaf3", mist="#fae6e0",
         layers=["#d5a9b8", "#b5869f", "#8c6584", "#5f4462", "#352840"]),
    dict(sky=[(0, "#86b9e0"), (0.55, "#d9ecf5"), (1, "#f7f2e6")], glow="#ffffff", sun="#ffffff", mist="#f0f6f8",
         layers=["#e8d3a8", "#d6b880", "#bf975e", "#987143", "#644a2d"], kind="dunes"),
]

EVENING = [
    dict(sky=[(0, "#0b1026"), (0.5, "#2a2550"), (1, "#5a3a6b")], glow="#7e6aa8", sun="#f4efe1", mist="#4a3f72", sun_y=0.3,
         layers=["#3b3461", "#2c2750", "#1f1c3d", "#15132b", "#0b0a19"]),
    dict(sky=[(0, "#1a1035"), (0.45, "#6b2f5c"), (0.8, "#e0735b"), (1, "#f2a65a")], glow="#ffb37a", sun="#ffe3b8", mist="#c66062", sun_y=0.5,
         layers=["#6a2f52", "#4e2342", "#361932", "#231124", "#140a16"]),
    dict(sky=[(0, "#050b18"), (0.6, "#10264a"), (1, "#24507a")], glow="#5a86b5", sun="#eef3ff", mist="#2e5683", sun_y=0.28,
         layers=["#1d3a5c", "#152d4a", "#0f2238", "#0a1828", "#050d17"]),
    dict(sky=[(0, "#140c26"), (0.5, "#3f2350"), (1, "#a1505b")], glow="#d07a6b", sun="#ffd9b0", mist="#7a3e5a", sun_y=0.46,
         layers=["#5a2c4a", "#44213b", "#30182c", "#1f101e", "#120911"], kind="dunes"),
    dict(sky=[(0, "#030712"), (0.55, "#0f1f2e"), (1, "#1f3b45")], glow="#4c7c80", sun="#f1f6ef", mist="#244a52", sun_y=0.26,
         layers=["#1b363c", "#142a30", "#0e1f24", "#091518", "#040b0d"]),
    dict(sky=[(0, "#0d0820"), (0.5, "#2b1a48"), (0.85, "#7c3f6a"), (1, "#c66a6a")], glow="#c27aa0", sun="#ffe6f0", mist="#5a3770", sun_y=0.36,
         layers=["#432a5e", "#33204b", "#241838", "#171027", "#0c0816"]),
]


def main():
    os.makedirs(OUT, exist_ok=True)
    for name, pals, night in (("sabah", MORNING, False), ("aksam", EVENING, True)):
        for i, p in enumerate(pals):
            kind = p.get("kind", "mountains")
            im = paint(1000 * (2 if night else 1) + i, p, kind, night)
            path = os.path.join(OUT, f"{name}-{i + 1:02d}.jpg")
            im.save(path, quality=86, optimize=True, progressive=True)
            print(path)


if __name__ == "__main__":
    main()
