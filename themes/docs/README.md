# _Docs_ theme

Documentation theme for [Cecil](https://cecil.app), powered by [Tailwind CSS](https://tailwindcss.com) and [Algolia DocSearch](https://docsearch.algolia.com).

![Screenshot](/docs/screenshot.png)

## Features

- Auto-generated navigation sidebar
- [Algolia DocSearch](https://docsearch.algolia.com) integration
- Ready for content localization (l10n)
- Templates internationalization (i18n)
- Mobile friendly
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
sidebar:
  - <group>
  - <group>
footer: Copyright © %author%
github:
  repo: https://github.com/<org>/<repo>
  branch: <main|master>
docsearch:
  enabled: true|false
  appId: <YOUR_APP_ID>
  indexName: <YOUR_INDEX_NAME>
  apiKey: <YOUR_SEARCH_API_KEY>
  debug: false|true
```

### Customize styles

Create the [Tailwind configuration](https://tailwindcss.com/docs/configuration) file `tailwind.config.js`:

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
  // uncomment to define custom colors
  /*theme: {
    extend: {
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
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

 _Docs_ theme is a free software distributed under the terms of the MIT license.

© [Arnaud Ligny](https://arnaudligny.fr)
