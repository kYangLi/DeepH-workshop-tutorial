# DeepH Workshop Tutorial

Hands-on tutorial for the DeepH-pack workshop: environment setup, dataset generation,
model training, inference, and the universal materials model.

**Read it online: <https://deeph-workshop-tutorial.readthedocs.io/>**

> Authors: Yang Li (DeepH-pack training), Bohen Zhao (DeepH-pack inference),
> Honggeng Tao (DeepH-dock), Zechen Tang (interface), Yong Xu (group leader)

## Repository layout

```
docs/                      # the tutorial itself, one folder per language
  en/                      #   English sources (published as /en/…)
    index.md
    1.Theoretical_backgrounds.md
    2.Installation.md
    3.Interface.md
    4.Training.md
    5.Inference.md
    6.UMM_odyssey.md
    figures/
  zh/                      #   Chinese sources (published as /zh-cn/…)
    index.md
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

- `main` — the edition currently being taught, built as **latest**. When the next year is
  written, `main` becomes that year; the previous edition stays on its own branch.
- `2025` — the 2025 edition, kept at `…/en/2025/` and still updated in place.

A fix to an old edition therefore goes to its own branch and never disturbs the current
one. Adding a year means branching, not moving files.

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
