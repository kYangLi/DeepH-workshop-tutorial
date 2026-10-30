# DeepH Workshop Tutorial

Hands-on tutorial for the DeepH-pack workshop: environment setup, dataset generation,
model training, inference, and the universal materials model.

**Read it online: <https://deeph-workshop-tutorial.readthedocs.io/>**

> Authors: Yang Li (DeepH-pack training), Bohen Zhao (DeepH-pack inference),
> Honggeng Tao (DeepH-dock), Zechen Tang (interface), Yong Xu (group leader)

## Repository layout

```
docs/                      # the tutorial itself (MkDocs source, published on Read the Docs)
  index.md                 #   landing page, links the editions
  2025/                    #   one folder per workshop year, each self-contained
    index.md
    1.Theoretical_backgrounds.md
    2.Installation.md
    3.Interface.md
    4.Training.md
    5.Inference.md
    6.UMM_odyssey.md
    figures/
  2026/                    #   next edition, written independently
    index.md
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

There is one folder per workshop year under `docs/`, and the editions are independent:

- `docs/2025/` is the 2025 edition. It keeps being corrected and updated in place, so its
  links stay `…/en/latest/2025/…` for good.
- `docs/2026/` is the 2026 edition, written separately rather than derived from 2025.

Adding a year means adding a folder and a `nav` entry; nothing in an older edition moves.

## License

Text and code in this repository are released under the [MIT License](LICENSE).
Third-party figures and datasets referenced by the tutorial remain under the terms of
their original publications.
