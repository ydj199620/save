"use strict";
exports.__esModule = true;
function bb(a, b) {
    return a + b;
}
console.log(bb(1, 2));
var Aa = /** @class */ (function () {
    function Aa(name) {
        this.name = name;
    }
    ;
    Aa.prototype.b = function (name) {
        this.name = name;
        console.log(this.name);
    };
    return Aa;
}());
exports.Aa = Aa;
var c = new Aa('王');
var a = {
    name: '旺财',
    color: '绿色',
    style: 'dog'
};
console.log(a);
