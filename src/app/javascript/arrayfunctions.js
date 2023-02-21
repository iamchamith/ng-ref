"use strict";
exports.__esModule = true;
exports.ArrayFunctions = void 0;
var ArrayFunctions = /** @class */ (function () {
    function ArrayFunctions() {
        this._humans = [];
        this._humans.push({ id: 1, name: 'Chamith', age: 56, city: 'Dunedine', country: 'Nz' });
        this._humans.push({ id: 2, name: 'Kasun', age: 21, city: 'Bali', country: 'SG' });
        this._humans.push({ id: 3, name: 'Sunil', age: 70, city: 'Ganemulla', country: 'SL' });
        this._humans.push({ id: 4, name: 'Nalin', age: 32, city: 'Ganemulla', country: 'SL' });
        this._humans.push({ id: 5, name: 'Dinidu', age: 54, city: 'Colombo', country: 'SL' });
        this._humans.push({ id: 6, name: 'Gihan', age: 21, city: 'Dunedine', country: 'Uk' });
        this._humans.push({ id: 7, name: 'Anton', age: 43, city: 'Kandana', country: 'SL' });
    }
    ArrayFunctions.prototype.firstOrDefault = function () {
        var result = this._humans.find(function (p) { return p.id === 3; });
        console.log('find result ' + JSON.stringify(result));
    };
    ArrayFunctions.prototype.where = function () {
        var result = this._humans.filter(function (p) { return p.city === 'Ganemulla'; });
        console.log('filter result ' + JSON.stringify(result));
    };
    ArrayFunctions.prototype.skip_take = function () {
        var skip = 2;
        var take = 5;
        var result = this._humans.slice(skip, skip + take);
        console.log('slice result ' + JSON.stringify(result));
    };
    ArrayFunctions.prototype.any = function () {
        // const result = this._humans.includes(p => p.city === 'Kurunagala');
        // console.log('every result ' + result);
    };
    ArrayFunctions.prototype.addRange = function () {
        this._humans.concat([{ id: 8, name: 'Rebeka', age: 43, city: 'Petersburg', country: 'Russia' }, { id: 9, name: 'Marry', age: 43, city: 'uka', country: 'Ukrain' }]);
    };
    ArrayFunctions.prototype.all = function () {
        var result = this._humans.every(function (p) { return p.id === 10; });
        console.log('every result ' + result);
    };
    ArrayFunctions.prototype.foreach = function () {
        var result = this._humans.forEach(function (p) { return p.age + 1; });
        console.log('forEach result ' + JSON.stringify(this._humans));
    };
    ArrayFunctions.prototype.distinct = function () { };
    ArrayFunctions.prototype.removeAll = function () {
        var result = this._humans.filter(function (p) { return p.country !== 'SL'; });
        console.log('forEach removeAll ' + JSON.stringify(result));
    };
    ArrayFunctions.prototype.min = function () { };
    ArrayFunctions.prototype.max = function () { };
    ArrayFunctions.prototype.sum = function () { };
    ArrayFunctions.prototype.runAll = function () {
        this.firstOrDefault();
        this.where();
        this.skip_take();
        this.any();
        this.addRange();
        this.all();
        this.foreach();
        this.removeAll();
    };
    return ArrayFunctions;
}());
exports.ArrayFunctions = ArrayFunctions;
var a = new ArrayFunctions();
a.runAll();
