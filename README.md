# DeepH Workshop Tutorial

Hands-on tutorial for the DeepH-pack workshop: environment setup, dataset generation,
model training, inference, and the universal materials model.

**Read it online: <https://workshop.deeph-pack.com/en/2025/>** (<https://workshop.deeph-pack.com/zh-cn/2025/> for Chinese)

> Authors: Yang Li (training), Bohen Zhao (inference), Honggeng Tao (data preparation),
> Zechen Tang (interface), Yong Xu (overall guidance)

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
.mkdocs/en.yml             # English layer: site_name, nav, edit link
.mkdocs/zh.yml             # Chinese layer: site_name, nav, edit link
.readthedocs.yaml          # build recipe used by the deployment pipeline
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

Each workshop year is a long-lived branch, published as a version of the site at
<https://workshop.deeph-pack.com>:

- `main` — the edition being written for the next workshop, published as **latest**
  (`/en/latest/`, `/zh-cn/latest/`).
- `2025` — this edition, served at `/en/2025/` and `/zh-cn/2025/` and kept in place.

A fix to an old edition therefore goes to its own branch and never disturbs the current
one. Adding a year means branching, not moving files.

## Languages

One repository, one set of branches, two languages built from the same commit:

| language | `DOCS_DIR` | `I18N_BASE` | URL |
|---|---|---|---|
| English | — (default `docs/en`) | — (default `.mkdocs/en.yml`) | `/en/…` |
| 简体中文 | `docs/zh` | `.mkdocs/zh.yml` | `/zh-cn/…` |

`.mkdocs.yml` reads those two variables while building, so one configuration produces
either language from one repository — no branch per language, no duplicated content.

Deployment is handled outside this repository: a webhook on a push builds the branches and
publishes them under `workshop.deeph-pack.com`. Nothing in the repository needs a server
address, a credential or an internal path.

### Adding a translated chapter

1. Translate the file into `docs/zh/`, keeping the same filename (`4.Training.md` stays
   `4.Training.md`) so the two trees stay comparable.
2. Add a line for it in `.mkdocs/zh.yml` under `nav`. Until a chapter is listed there it
   is built but unreachable, so translate and publish one chapter at a time.

## License

Text and code in this repository are released under the [MIT License](LICENSE).
Third-party figures and datasets referenced by the tutorial remain under the terms of
their original publications.
