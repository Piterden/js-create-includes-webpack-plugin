# JSCreateIncludesWebpackPlugin

The simple plug-in which allows you to run cordova/webpack app.

## Overview

The WebPack plugin for convert HTML script assignment like:

```html
<script src="/bundle.js"></script>
```

 to JS creation of a DOM-element:

```html
<script>
  const bundleScript = document.createElement('script');
  bundleScript.type = 'text/javascript';
  bundleScript.async = true;
  bundleScript.src = 'bundle.js';
  document.body.appendChild(bundleScript);
</script>
```

## Installation

> ##### Requirements:
>
> - webpack
> - html-webpack-plugin

```sh
$ npm i js-create-includes-webpack-plugin -D
```

## Usage

Add to you WebPack config file the next:

```js
const JSCreateIncludesWebpackPlugin = require('js-create-includes-webpack-plugin')

// ...

module.exports = {
  plugins: [
    // Place it after HtmlWebpackPlugin
    new JSCreateIncludesWebpackPlugin(),
  ],
}
```

## Credits

Author: Denis Efremov [@piterden](https://github.com/piterden)

