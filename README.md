# hapi-spa-serve

Serve a single-page-app from hapi using inert

**NOTE: Requires inert plugin to already be registered**

## Usage

```js
const SPA = require('hapi-spa-serve')
const path = require('path')

SPA(server, {assets: path.join(__dirname, 'assets'), path: '/app'})
```

In case you're using an auth startegy you might want to set options to `{ auth: {mode: 'optional'} }`

## API

 - `assets: String` Absolute path to assets
 - `path: String` Optional path to serve the app, default: `/`
 - `options: Object` Optional options to add to the routes, default: `null`
