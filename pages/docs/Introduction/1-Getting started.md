---
title: Getting started
description: Learn how to start building your documentation website with Statidocs, powered by Cecil.
---
# Getting started

Statidocs is a powerful documentation starter, built by static site generator [Cecil](https://cecil.app).

:::important
PHP 8.1+ is required.
:::

## Create a new project

The easiest way to create a new Statidocs project is using [Composer](https://getcomposer.org):

```bash
composer create-project cecil/statidocs my-project
```

:::info
This command also download `cecil.phar` binary.
:::

## Start the local server

When working locally, [Cecil’s built-in server](https://cecil.app/documentation/commands/#serve) lets you preview your work and automatically refreshes your browser when you make changes.

Inside your project directory, run the following command to start the local server:

```bash
php cecil.phar serve
```

This will log a message to your terminal with the URL of your local preview. Open this URL (<http://localhost:8000> by default) to start browsing your documentation.

## Add articles

### File formats

Statidocs supports authoring content in Markdown with no configuration required. You can extend default capabilities by enabling [Cecil's Markdown options](https://cecil.app/documentation/content/#markdown).

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

## Updating Statidocs

:::tip
Statidocs is still in development, there will be frequent updates and improvements. Be sure to update Statidocs regularly
:::

Statidocs is built on top of the Cecil theme [_docs_](https://github.com/Cecilapp/theme-docs). You can update it and other Cecil themes by running the following command in your terminal:

```bash
composer update
```
