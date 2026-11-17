# TinyWOD — Project Website

A static, single-page academic project website for **TinyWOD**, a tiny object detection
dataset for high-altitude open-water search and rescue (OW-SAR), submitted to *Scientific Data*.

> **TinyWOD** — *A Tiny Object Detection Dataset for High-Altitude Open-Water Search and Rescue*
> Hui Xu, Chenfei Hou, Henglai Wei, Hao Wang, Yidong Jin, Xiulin Niu, Haoyang Zhang, Hui Zhang
> Beihang University

## Structure

```text
TinyWOD-Website/
├── index.html        # single-page site
├── style.css         # styles
├── script.js         # minimal vanilla JS (nav highlighting)
├── paper.pdf         # full paper (linked by the "Paper" button)
├── figures/
│   ├── datacollection.png
│   ├── figure3.png
│   ├── comparison.png
│   └── visualization.png
└── README.md
```

## Requirements

- Plain HTML5, CSS3, and vanilla JavaScript — no frameworks or build step.
- No backend or database required.

## Deploy to GitHub Pages

The site is a plain static page, so it can be published directly on GitHub Pages:

1. Push this folder to a GitHub repository (as the repo root).
2. Go to **Settings → Pages**, set **Source** to `Deploy from a branch`, and choose the `main` branch with the `/ (root)` directory.
3. GitHub will build and publish the site at `https://<user>.github.io/<repo>/`.

All image paths are relative (`figures/...`), so the site works at any base path.

## Links

- **Dataset:** <https://www.kaggle.com/datasets/songx001/tinywod>
- **Benchmark code:** <https://github.com/SongX-1/TinyWOD-Benchmark>
- **Contact:** <huizhang285@buaa.edu.cn>

## License

- Website code: MIT.
- Dataset: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
