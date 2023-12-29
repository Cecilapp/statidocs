---
title: Getting Started
description: Learn how to start building your documentation website with Statidocs, powered by Cecil.
---
# Getting Started

_Statidocs_ is a powerful documentation theme on top of [Cecil](https://cecil.app), a static site generator, so you need to [download Cecil](https://cecil.app/download) first.

:::important
PHP 8.1+ is required
:::

## Installation

### Cecil

According to you OS there is different way to download Cecil:

Windows
: Click on the following URL: <https://cecil.app/cecil.phar>

macOS
: `brew install cecilapp/cecil/cecil`

Linux
: curl -LO https://cecil.app/cecil.phar

*[OS]: Operating System

### Statidocs

The easiest way to install Statidocs is to download it from GitHub:

Manually
: <https://codeload.github.com/Cecilapp/statidocs/zip/refs/heads/main>

With Git
: `git clone https://github.com/Cecilapp/statidocs.git`

## Start the local server

When working locally, [Cecil’s built-in server](https://cecil.app/documentation/commands/#serve) lets you preview your work and automatically refreshes your browser when you make changes.

Inside your project directory, run the following command to start the local server:

```bash
php cecil.phar serve
```

This will log a message to your terminal with the URL of your local preview. Open this URL to start browsing your documentation.

## Add content

### File formats

Statidocs supports authoring content in Markdown with no configuration required. You can extend default capabilities by enabling [Cecil's Markdown options](https://cecil.app/documentation/content/#markdown).

### Add pages

Add new pages to your site by creating `.md` files in `pages/docs/`. Use one level sub-folders to organize your files and to create multiple path segments.

For example, the following file structure will generate pages at `domain.tld/docs/getting-started` and `domain.tld/docs/guides/i18n`:

```
<mywebsite>
└─ pages
   └─ docs
      ├─ guides
      |  └─ i18n.md
      └─ getting-started.md
```

### Front matter

> to do
