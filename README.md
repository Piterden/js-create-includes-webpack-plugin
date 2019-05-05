# [JSCreateIncludesWebpackPlugin](https://github.com/Piterden/js-create-includes-webpack-plugin)

![Travis (.org)](https://img.shields.io/travis/Piterden/js-create-includes-webpack-plugin.svg?style=for-the-badge)
![GitHub search hit counter](https://img.shields.io/github/search/Piterden/js-create-includes-webpack-plugin/webpack.svg?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Piterden/js-create-includes-webpack-plugin.svg?style=for-the-badge)

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

