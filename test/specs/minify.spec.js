var optimizejs = require('../../index.js');

function mockContents(c) {
    var _c = c;
    return {
        getHash: function () {
            return void 0;
        },
        getString: function () {
            return _c;
        },
        set: function (newC) {
            _c = newC;
        },
    };
}

describe('optimizejs', function () {

    describe('before and after', function (expect) {
        var before = '!function(){console.log("hello")}();';
        var after = '!(function(){console.log("hello")})();';

        var r = optimizejs().exec({
            contents: mockContents(before),
        });
        expect(r.contents.getString()).toBe(after);
    });

});
