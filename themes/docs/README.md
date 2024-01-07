# _Docs_ theme

Documentation theme for [Cecil](https://cecil.app), powered by [Tailwind CSS](https://tailwindcss.com).

![Screenshot](/docs/screenshot.png)

## Features

- [Algolia DocSearch](https://docsearch.algolia.com) integration
- Auto-generated navigation sidebar
- Localization (i18n)
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
  appId: <YOUR_APP_ID>
  indexName: <YOUR_INDEX_NAME>
  apiKey: <YOUR_SEARCH_API_KEY>
  debug: false|true
sidebar:
  - <group>
  - <group>
```

### Customize Tailwind CSS

Create the Tailwind configuration file `tailwind.config.js`:

```javascript
// uncomment to define custom primary color
//const colors = require('tailwindcss/colors');

module.exports = {
  presets: [
    require('./themes/docs/tailwind.preset.js')
  ],
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ],
  // uncomment to define custom primary color
  /*theme: {
    extend: {
      colors: {
        primary: colors.blue, // https://tailwindcss.com/docs/customizing-colors
      },
    },
  }*/
}
```

Run the following command:

```bash
npm install -D tailwindcss
npx tailwindcss -i ./themes/docs/tailwind.css -o ./assets/styles.css
```

## Development

### Install deps

```bash
npm install
```

### Rebuild CSS

```bash
npx tailwindcss -c ./tailwind.preset.js -i ./tailwind.css -o ./assets/styles.css
```

## License

 _Docs_ is a free software distributed under the terms of the MIT license.

© [Arnaud Ligny](https://arnaudligny.fr)
