"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.HashTableFunc = void 0;
var HashTableFunc = /** @class */ (function () {
    function HashTableFunc() {
        this._hash = {};
    }
    HashTableFunc.prototype.add = function (key, obj) {
        this._hash[key] = obj;
    };
    HashTableFunc.prototype.get = function (key) {
        return this._hash[key];
        ;
    };
    return HashTableFunc;
}());
exports.HashTableFunc = HashTableFunc;
var a = new HashTableFunc();
a.add('one', { name: 'Chamith' });
a.add('two', { name: 'Sarath', age: 23 });
console.log(a.get('one'));
console.log(a.get('two'));
var dc = {
    nic: '880240684v',
    taxNumber: '123123121'
};
//spread
console.log(__spreadArray(['789789', '123123'], dc.nic, true));
