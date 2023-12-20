# Statidocs

_Statidocs_ is a documentation theme built on top of [Cecil](https://cecil.app).

> [!IMPORTANT]  
> **WIP**: _Statidocs_ is still in development. If something that’s not working, please [open an issue on GitHub](https://github.com/Cecilapp/statidocs/issues/new/choose).

```bash
# download Cecil
curl -LO https://cecil.app/cecil.phar
# install dependencies
composer install
npm install
# (re)build theme CSS (if necessary)
npx tailwindcss -i ./themes/docs/tailwind.css -o ./assets/styles.css --watch
# serve
php cecil.phar serve -v
```
