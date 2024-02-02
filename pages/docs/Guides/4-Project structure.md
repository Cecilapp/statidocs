# Project structure

This guide will show you how a Statidocs project is organized and what the different files in your project do.

Statidocs projects follow the same file and directory structure as a Cecil projects. See [Cecil’s files organization documentation](https://cecil.app/documentation/content/#files-organization) for more detail.

## Files and directories

- `cecil.yml` — The cecil configuration file, includes the Statidocs configuration.
- `pages/docs/` — Content files. Statidocs turns each .md file in this directory into a page on your site.
- `translations/` (optional) — Translation data to support internationalization.
- `assets/` — Assets (styles, images, favicon, PDFs, etc.) that will not be processed by Cecil.
