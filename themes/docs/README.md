# _Docs_ theme

Documentation theme for [Cecil](https://cecil.app), powered by [Tailwind CSS](https://tailwindcss.com).

## Features

- Algolia DocSearch integration
- Auto-generated navigation sidebar
- Localization
- Dark theme
- etc.

## Installation

```bash
composer require cecil/theme-docs
```

> Or [download the latest archive](https://github.com/Cecilapp/theme-docs/releases/latest/) and uncompress its content in `themes/docs`.

## Usage

Add `docs` in the `theme` section of the `config.yml`:

```yaml
theme:
  - docs
```

### Configuration

```yaml
github:
  repo: https://github.com/<org>/<repo>
  branch: <main|master>
docsearch:
  enabled: true|false
  apiKey: <key>
  appId: <id>
  indexName: <index>
  debug: false|true
sidebar:
  - <group>
  - <group>
```
