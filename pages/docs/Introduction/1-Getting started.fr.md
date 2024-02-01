---
title: Mise en route
description: Apprenez à créer votre site de documentation avec Statidocs, propulsé par Cecil.
---
# Mise en route

Statidocs est un puissant démarreur de documentation, construit par le générateur de sites statiques [Cecil](https://cecil.app).

:::important
PHP 8.1+ est nécessaire.
:::

## Créer un nouveau projet

Le moyen le plus simple de créer un nouveau projet Statidocs consiste à utiliser [Composer](https://getcomposer.org) :

```bash
composer create-project cecil/statidocs mon-projet
```

:::info
Cette commande télécharge également le binaire `cecil.phar`.
:::

## Démarrer le serveur local

Quand vous travaillez localement, le [serveur intégré à Cecil](https://cecil.app/documentation/commands/#serve) vous permet de prévisualiser votre travail et il rafraichit automatiquement votre navigateur lorsque vous effectuez une modification.

Au sein de votre projet, lancez la commande suivante pour démarrer le serveur local :

```bash
php cecil.phar serve
```

Cela va afficher un message dans votre terminal avec l’URL de votre aperçu local. Ouvrez cette URL (<http://localhost:8000> par défaut) pour commencer à parcourir votre documentation.

## Ajouter des articles

### Formats de fichier

Statidocs supporte la rédaction de contenu au format Markdown sans paramétrage particulier. Vous pouvez étendre les capacités en activant les [options Markdown de Cecil](https://cecil.app/documentation/content/#markdown).

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

Pour en savoir plus, consultez la [documentation de Cecil concernant le front matter](https://cecil.app/documentation/content/#front-matter).

## Mise à jour de Statidocs

:::tip
Statidocs est encore en développement, il y aura des mises à jour et des améliorations fréquentes. Assurez-vous de mettre à jour Statidocs régulièrement
:::

Statidocs est construit sur le thème Cecil [_docs_](https://github.com/Cecilapp/theme-docs). Vous pouvez le mettre à jour ainsi que d'autres thèmes Cecil en exécutant la commande suivante dans votre terminal :

```bash
composer update
```
