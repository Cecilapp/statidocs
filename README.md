# Statidocs

_Statidocs_ is a documentation theme built on top of [Cecil](https://cecil.app).

[![Statidocs screenshot](docs/screenshot.png)](https://cecilapp.github.io/statidocs/)

> [!IMPORTANT]  
> _Statidocs_ is still in development. If something that’s not working, please [open an issue on GitHub](https://github.com/Cecilapp/statidocs/issues/new/choose).

## Usage

Download Cecil:

```bash
curl -LO https://cecil.app/cecil.phar
```

Build & preview:

```bash
php cecil.phar serve
```

## Development

Install/update dependencies:

```bash
composer update
npm install
```

Build CSS (if necessary):

```bash
npx tailwindcss -i ./themes/docs/tailwind.css -o ./assets/styles.css
```

## Publish

```bash
# build then copy `_site` to your web server
php cecil.phar build
```
