"""Sphinx configuration for the English edition."""

project = "DeepH-pack Workshop 2026"
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
language = "en"

html_theme = "sphinx_book_theme"
html_title = project
html_theme_options = {
    "show_toc_level": 2,
    "show_navbar_depth": 1,
    "use_download_button": False,
    "use_fullscreen_button": True,
    "use_edit_page_button": False,
    "use_issues_button": False,
}
html_static_path = ["_static"]
html_css_files = ["custom/workshop.css"]
