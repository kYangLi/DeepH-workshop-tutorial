# DeepH Workshop Tutorial

Hands-on tutorial for the DeepH-pack workshop: environment setup, dataset generation,
model training, inference, and the universal materials model.

**Read it online: <https://deeph-workshop-tutorial.readthedocs.io/>**

> Authors: Yang Li (DeepH-pack training), Bohen Zhao (DeepH-pack inference),
> Honggeng Tao (DeepH-dock), Zechen Tang (interface), Yong Xu (group leader)

## Repository layout

```
docs/                      # the tutorial itself (MkDocs source, published on Read the Docs)
  index.md                 #   home page
  1.Theoretical_backgrounds.md
  2.Installation.md
  3.Interface.md
  4.Training.md
  5.Inference.md
  6.UMM_odyssey.md
  figures/
.mkdocs.yml                # MkDocs config (docs_dir: docs)
.readthedocs.yaml          # Read the Docs build recipe
.requirements.txt          # build dependencies
```

## Building locally

```bash
uv venv .venv-docs --python 3.13
uv pip install -r .requirements.txt
uv run mkdocs serve -f .mkdocs.yml
```

Then open <http://127.0.0.1:8000/>.

## Editions

Each workshop year is a long-lived branch, published by Read the Docs as a version:

- `main` — the edition currently being taught, built as **latest**. When the next year is
  written, `main` becomes that year; the previous edition stays on its own branch.
- `2025` — the 2025 edition, kept at `…/en/2025/` and still updated in place.

A fix to an old edition therefore goes to its own branch and never disturbs the current
one. Adding a year means branching, not moving files.

## License

Text and code in this repository are released under the [MIT License](LICENSE).
Third-party figures and datasets referenced by the tutorial remain under the terms of
their original publications.
