"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Water = void 0;
var Water = /** @class */ (function () {
    function Water() {
        this.Name = 'Chamith';
    }
    __decorate([
        ToLower()
    ], Water.prototype, "Name");
    Water = __decorate([
        Frozen
    ], Water);
    return Water;
}());
exports.Water = Water;
//class decorator
function Frozen(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
// property decorator
function ToLower() {
    var formatMetadataKey = Symbol("format");
    return function (target, key) {
        var val = target[key];
        var getter = function () { return val; };
        var setter = function (next) { return val.ToLower(); };
    };
}
console.log(new Water().Name);
