# JSCreateIncludesWebpackPlugin

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

```sh
$ npm i js-create-includes-webpack-plugin -D
```



## Usage

## Credits

