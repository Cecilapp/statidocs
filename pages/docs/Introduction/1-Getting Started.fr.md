---
title: Mise en route
description: Apprenez à créer votre site de documentation avec Statidocs, propulsé par Cecil.
---
# Mise en route

_Statidocs_ est un puissant starter de documentation au dessus de Cecil [Cecil](https://cecil.app/fr), un générateur de site statique.

## Installation

:::important
PHP 8.1+ est nécessaire
:::

### Cecil

Il existe différentes manières d’installer/télécharger Cecil :

CLI
: `curl -LO https://cecil.app/cecil.phar`

Homebrew
: `brew install cecilapp/cecil/cecil`

Manuellement
: <https://cecil.app/cecil.phar>

### Statidocs

La manière la plus simple d’installer _Statidocs_ est depuis GitHub :

Git
: `git clone https://github.com/Cecilapp/statidocs.git`

Manually
: <https://codeload.github.com/Cecilapp/statidocs/zip/refs/heads/main>

## Démarrer le serveur local

Quand vous travaillez localement, le [serveur intégré à Cecil](https://cecil.app/documentation/commands/#serve) vous permet de prévisualiser votre travail et il rafraichit automatiquement votre navigateur lorsque vous éffectuez une modification.

Au sein de votre projet, lancez la commande suivante pour démarrer le serveur local :

```bash
php cecil.phar serve
```

Cela va afficher un message dans votre terminal avec l’URL de votre aperçu local. Ouvrez cette URL pour commencer à parcourir votre documentation.

## Ajouter du contenu

### Formats de fichier

_Statidocs_ supporte la rédaction de contenu au format Markdown sans paramétrage particulier. Vous pouvez étendre les capacités en activant les [options Markdown de Cecil](https://cecil.app/documentation/content/#markdown).

### Ajouter des pages

Ajoutez de nouvelles pages à votre site en créant des fichiers `.md` dans `pages/docs/`. Utilisez un niveau de sous-dossiers pour organiser vos fichiers et un préfixe numérique pour les trier.

Par exemple, la structure de fichiers suivante va générer les pages au niveau de `domain.tld/docs/mise-en-route` et de `domain.tld/docs/guides/i18n` :

```text
<monsite>
└─ pages
   └─ docs
      ├─ guides
      |  └─ 2-i18n.md
      └─ 1-Mise en route.md
```

### Front matter

Toutes les pages utilisent les variables du front matter afin de contrôler la manière dont elles apparaissent :

```yaml
---
title: Salut le monde
description: Ceci est une description de page.
---
```

Pour en savoir plus, jeter un œil à la [documentation de Cecil concernant le front matter](https://cecil.app/documentation/content/#front-matter).
