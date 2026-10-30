# DeepH Workshop Tutorial

Hands-on tutorial for the DeepH-pack workshop: environment setup, dataset generation,
model training, inference, and the universal materials model.

**Read it online: <https://deeph-workshop-tutorial.readthedocs.io/>**

> Authors: Yang Li (training), Bohen Zhao (inference), Honggeng Tao (data preparation),
> Zechen Tang (interface), Yong Xu (overall guidance)

## Repository layout

```
docs/                      # the tutorial itself, one folder per language
  en/                      #   English sources (published as /en/…)
    index.md
    <chapters>.md
    figures/
  zh/                      #   Chinese sources (published as /zh-cn/…)
    index.md
    <chapters>.md
    figures/
.mkdocs.yml                # shared config: theme, extensions, plugins
.mkdocs/en.yml             # English layer: site_name + nav
.mkdocs/zh.yml             # Chinese layer: site_name + nav
.readthedocs.yaml          # Read the Docs build recipe
.requirements.txt          # build dependencies
```

## Building locally

```bash
uv venv .venv-docs --python 3.13
uv pip install -r .requirements.txt
uv run mkdocs serve -f .mkdocs.yml
```

Then open <http://127.0.0.1:8000/>. To preview the Chinese build, point both variables at it:

```bash
DOCS_DIR=docs/zh I18N_BASE=.mkdocs/zh.yml uv run mkdocs serve -f .mkdocs.yml
```

## Editions

Each workshop year is a long-lived branch, published by Read the Docs as a version:

- `main` — the edition being written for the next workshop, built as **latest**. It now
  holds the 2026 preview and grows into the full 2026 tutorial.
- `2026` — mirrored to `main` so that `…/en/2026/` and `…/zh-cn/2026/` exist while the
  edition is still being written.
- `2025` — the finished 2025 edition, served at `…/en/2025/` and `…/zh-cn/2025/`.

## Pushing a change

`main` is the only branch to commit on. `2026` follows it, and both refs are updated by a
single push so they cannot drift apart:

```bash
git push origin main main:2026
```

or, with the repository-local alias:

```bash
git push2
```

Only commit on `main`; `2026` is a publishing mirror and must never receive commits of its
own. When the 2026 workshop is over, stop mirroring: `2026` freezes at its last commit and
`main` moves on to the next edition.

## Languages

One repository, one set of branches, two Read the Docs projects:

| Read the Docs project | language | `DOCS_DIR` | `I18N_BASE` | URL |
|---|---|---|---|---|
| `deeph-workshop-tutorial` | English | — (default `docs/en`) | — (default `.mkdocs/en.yml`) | `/en/…` |
| `deeph-workshop-tutorial-zh` | 简体中文 | `docs/zh` | `.mkdocs/zh.yml` | `/zh-cn/…` |

Both variables are set under **Admin → Environment Variables** in the Read the Docs
project. `.mkdocs.yml` reads them while building, so the two projects build different
source trees and different nav from the same commit — no branch per language, no
duplicated content. The Chinese project is added as a **translation** of the English one,
which is what gives the language switcher and the `/zh-cn/` prefix.

Both projects build every version listed above, so `/zh-cn/2025/` works as soon as the
`2025` branch has Chinese sources.

### Adding a translated chapter

1. Translate the file into `docs/zh/`, keeping the same filename (`4.Training.md` stays
   `4.Training.md`) so the two trees stay comparable.
2. Add a line for it in `.mkdocs/zh.yml` under `nav`. Until a chapter is listed there it
   is built but unreachable, so translate and publish one chapter at a time.

## License

Text and code in this repository are released under the [MIT License](LICENSE).
Third-party figures and datasets referenced by the tutorial remain under the terms of
their original publications.
