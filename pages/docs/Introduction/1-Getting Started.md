---
title: Getting started
description: Learn how to start building your documentation website with Statidocs, powered by Cecil.
---
# Getting started

_Statidocs_ is a powerful documentation starter on top of [Cecil](https://cecil.app), a static site generator.

## Installation

:::important
PHP 8.1+ is required
:::

### Cecil

There is differents way to install/download Cecil:

CLI
: `curl -LO https://cecil.app/cecil.phar`

Homebrew
: `brew install cecilapp/cecil/cecil`

Manually
: <https://cecil.app/cecil.phar>

### Statidocs

The easiest way to install _Statidocs_ is to download it from GitHub:

Git
: `git clone https://github.com/Cecilapp/statidocs.git`

Manually
: <https://codeload.github.com/Cecilapp/statidocs/zip/refs/heads/main>

## Start the local server

When working locally, [Cecil’s built-in server](https://cecil.app/documentation/commands/#serve) lets you preview your work and automatically refreshes your browser when you make changes.

Inside your project directory, run the following command to start the local server:

```bash
php cecil.phar serve
```

This will log a message to your terminal with the URL of your local preview. Open this URL to start browsing your documentation.

## Add content

### File formats

_Statidocs_ supports authoring content in Markdown with no configuration required. You can extend default capabilities by enabling [Cecil's Markdown options](https://cecil.app/documentation/content/#markdown).

### Add pages

Add new pages to your site by creating `.md` files in `pages/docs/`. Use one level sub-folders to organize your files and number prefix to sort them.

For example, the following file structure will generate pages at `domain.tld/docs/getting-started` and `domain.tld/docs/guides/i18n`:

```text
<mywebsite>
└─ pages
   └─ docs
      ├─ guides
      |  └─ 2-i18n.md
      └─ 1-Getting Started.md
```

### Front matter

All pages use front matter variables to control how the page appears:

```yaml
---
title: Hello world
description: This is a page description.
---
```

To know more, checks the [Cecil front matter documentation](https://cecil.app/documentation/content/#front-matter).
