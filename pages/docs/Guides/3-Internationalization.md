# Internationalization (i18n)

Statidocs provides built-in support for multilingual sites.

## Configure i18n

Tell Statidocs about the languages you support by passing locales in the configuraiton (`cecil.yml`) file:

```yaml
language: en # default language
languages:
  - code: en
    name: English
    locale: en
  - code: fr
    enabled: true # disable with "false"
    name: Français
    locale: fr
```

## Translate pages

Duplicate pages you want to translate by adding language code as suffix, for example:

```text
<my-project>
└─ pages
   └─ docs
      ├─ getting-started.md
      └─ getting-started.fr.md
```

:::tips
Cecil documentation: <https://cecil.app/documentation/content/#multilingual>
:::

## Translate UI

:::tips
Cecil documentation: <https://cecil.app/documentation/templates/#localization>
:::
