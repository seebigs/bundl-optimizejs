/**
 * OptimizeJS extension for Bundl
 */

var optimizeJS = require('optimize-js');

module.exports = function (options) {
    options = options || {};

    var cache = {};

    function optimizejs (r) {
        var contentsHash = r.contents.getHash();
        var cached = cache[contentsHash];

        if (r.changed) {
            cache = {};
        }

        if (cached) {
            r.contents.set(cached);
        } else {
            var result = optimizeJS(r.contents.getString());
            r.contents.set(result);
            cache[contentsHash] = result;
        }

        return r;
    }

    return {
        name: 'optimizejs',
        stage: 'stringy',
        ext: ['js'],
        exec: optimizejs,
    };

};
