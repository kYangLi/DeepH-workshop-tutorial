"""Sphinx configuration for the Chinese edition.

Same layout and theme as the English build; only the bookkeeping strings and
the interface language differ, so the two trees stay directly comparable.
"""

project = "2026年DeepH研讨会"
copyright = "2025-2026, DeepH Team"
author = "DeepH Team"

extensions = ["myst_parser", "sphinx_design"]

myst_enable_extensions = [
    "dollarmath",
    "amsmath",
    "colon_fence",
    "deflist",
    "fieldlist",
    "attrs_inline",
]

source_suffix = {".md": "markdown"}
root_doc = "index"
language = "zh_CN"

html_theme = "sphinx_book_theme"
html_title = project
html_theme_options = {
    "show_toc_level": 2,
    "show_navbar_depth": 2,
    "use_download_button": False,
    "use_fullscreen_button": False,
    "use_edit_page_button": False,
    "use_issues_button": False,
    "repository_url": "https://github.com/kYangLi/DeepH-workshop-tutorial",
    "repository_provider": "github",
    "use_repository_button": True,
}
html_static_path = ["../_static"]
html_css_files = ["custom/workshop.css"]
html_js_files = ["custom/lang-switch.js"]
