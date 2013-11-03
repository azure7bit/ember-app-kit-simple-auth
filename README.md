ember-app-kit-simple-auth
===================
Working example of [ember-app-kit](https://github.com/stefanpenner/ember-app-kit) using [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) for OAuth2 authentication.

Backend example for Django available at [django-rest-framework-oauth2-provider-example](https://github.com/erkarl/django-rest-framework-oauth2-provider-example).

### Requirements 
* You should have [node.js](http://nodejs.org/ "node.js") installed. [Setup on Ubuntu 12.04](https://www.digitalocean.com/community/articles/how-to-install-an-upstream-version-of-node-js-on-ubuntu-12-04)
* Make sure your [SSH keys](https://help.github.com/articles/generating-ssh-keys) are set up properly for GitHub.

## Install 
Clone this repo
```console
git clone git@github.com:erkarl/ember-app-kit-simple-auth.git
cd ember-app-kit-simple-auth 
```

Install the Grunt command-line tool globally (you might have to use sudo depending how you installed node.js)
```console
npm install -g grunt-cli
```

Install the dependencies Grunt relies on to build
```console
npm install
```

Install Bower, a package manager that keeps your front-end dependencies (including JQuery, Ember, and QUnit) up to date. You might have to use sudo depending how you installed node.js.
```console
npm install -g bower
bower install
```

### Fire up the development server

```console
grunt server
```
Builds your application (in debug mode) and serves it. This task also will watch your application for changes, and will rebuild any time you change a file.

Launch [http://localhost:8000](http://localhost:8000) in your browser.

If you're using [django-rest-framework-oauth2-provider-example](https://github.com/erkarl/django-rest-framework-oauth2-provider-example) as
a backend the default login information is:
Username: *ar*
Password: *ar*

...otherwise you can configure your *client_id* an *client_secret* in *../app/controllers/login.js* and setup your server's *token endpoint* in ../app/app.js

### Run tests
```console
grunt
```
Builds your application (in debug mode) and runs its tests.

### Build for production  

```console
grunt build:dist
```
Builds your application once in dist mode. This means your assets will be minified and version-stamped. This task also builds to the dist/ folder, which can be deployed to a static server in production.
