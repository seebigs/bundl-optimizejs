# bundl-optimizejs

*Use OptimizeJS on your bundles for faster runtime execution*

*Runs with the amazing [Bundl](https://github.com/seebigs/bundl) build tool*

## Install

```
$ npm install --save-dev bundl-optimizejs
```

## Use

```js
var Bundl = require('bundl');
var optimize = require('bundl-optimizejs');

new Bundl(targets)
    .then(optimize())
    .then(write())
    .go();
```
