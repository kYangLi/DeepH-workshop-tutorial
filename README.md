# DeepH Workshop Tutorial

Hands-on tutorial for the DeepH-pack workshop: environment setup, dataset generation,
model training, inference, and the universal materials model.

**Read it online: <https://workshop.deeph-pack.com/>**

> Authors: Yang Li (training), Bohen Zhao (inference), Honggeng Tao (data preparation),
> Zechen Tang (interface), Yong Xu (overall guidance)

## Repository layout

Built with Sphinx and the [sphinx-book-theme](https://sphinx-book-theme.readthedocs.io/),
the same stack as the DeepH-pack manual, restyled with a teal accent so the two sites are
told apart at a glance.

```
docs/
  en/                      # English edition (published as /en/…)
    conf.py
    index.md
    <chapters>.md
    _static/custom/workshop.css
  zh/                      # Chinese edition (published as /zh-cn/…)
    conf.py
    index.md
    <chapters>.md
    _static/custom/workshop.css
.readthedocs.yaml          # English build recipe
docs/zh/.readthedocs.yaml  # Chinese build recipe (the file name is fixed by the format)
.requirements.txt          # build dependencies
```

## Building locally

```bash
uv venv .venv-docs --python 3.13
uv pip install -r .requirements.txt
uv run sphinx-build -c docs/en -b html docs/en _build/en
uv run sphinx-build -c docs/zh -b html docs/zh _build/zh
```

Then open `_build/en/index.html` or `_build/zh/index.html` directly in a browser.

## Editions

Each workshop year is a long-lived branch, published as a version of the site at
<https://workshop.deeph-pack.com>:

- `main` — the edition being written for the next workshop, published as **latest**
  (`/en/latest/`, `/zh-cn/latest/`). It holds the 2026 edition.
- `2025` — the finished 2025 edition, served at `/en/2025/` and `/zh-cn/2025/`. It is
  still built with MkDocs and the Read the Docs theme: the theme difference is the visual
  signature of the year.
- `2026` — a mirror of `main`, kept in step by the command below. It is not published
  under its own URL and can be retired once the edition ships.

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

One repository, one branch per year, one site with two languages:

| language | source | build recipe | URL |
|---|---|---|---|
| English | `docs/en` | `.readthedocs.yaml` → `docs/en/conf.py` | `/en/…` |
| 简体中文 | `docs/zh` | `docs/zh/.readthedocs.yaml` → `docs/zh/conf.py` | `/zh-cn/…` |

Each language tree has its own `conf.py` and its own build recipe, so the two can be built
from the same commit without duplicating anything: the English and Chinese pages of a
chapter sit side by side and are reviewed in the same pull request.

Deployment is handled outside this repository: a webhook on a push builds the branches and
publishes them under `workshop.deeph-pack.com`, with `main` as `latest`. Nothing in the
repository needs a server address, a credential or an internal path.

### Adding a chapter

1. Write it in `docs/en/` and translate it into `docs/zh/`, keeping the same filename so
   the two trees stay comparable.
2. Reference it from the `{toctree}` in that language's `index.md`. A page that is not in
   a toctree is built but unreachable, so publish chapter by chapter if you like.

## License

Text and code in this repository are released under the [MIT License](LICENSE).
Third-party figures and datasets referenced by the tutorial remain under the terms of
their original publications.
