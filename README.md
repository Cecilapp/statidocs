# Statidocs

_Statidocs_ is a starter documentation site built on top of [Cecil](https://cecil.app).

[![Screenshot of the demo's homepage of Statidocs](screenshot.png)](https://cecilapp.github.io/statidocs/)

Demo: <https://cecilapp.github.io/statidocs/>

> [!IMPORTANT]  
> _Statidocs_ is still in development. If something that’s not working, please [open an issue on GitHub](https://github.com/Cecilapp/statidocs/issues/new/choose).

## Install

The easiest way to create a new Statidocs project is using [Composer](https://getcomposer.org):

```bash
composer create-project cecil/statidocs my-project
```

[![Latest Stable Version](https://poser.pugx.org/cecil/statidocs/v/stable)](https://packagist.org/packages/cecil/statidocs)

## Usage

Build & preview:

```bash
php cecil.phar serve
```

Read the [documentation](https://cecilapp.github.io/statidocs/).

### Update themes

_Statidocs_ is depending of Cecil's themes [Docs](https://github.com/Cecilapp/theme-docs) and [PWA](https://github.com/Cecilapp/theme-pwa).

Use the following command to update them:

```bash
composer update
```

### Configuration

Checks the [`cecil.yml`](cecil.yml) file.

### Customize colors

Checks the [`tailwind.config.js`](tailwind.config.js) file, then rebuild the CSS file:

```bash
npm install
npx tailwindcss -i ./themes/docs/tailwind.css -o ./assets/styles.css
```

## Publish

```bash
php cecil.phar build
```

Then copy content of `_site` to your web server.
