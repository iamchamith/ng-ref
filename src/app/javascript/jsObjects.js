"use strict";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/
exports.__esModule = true;
var student = {
    name: 'Chamith',
    address: {
        no: '123',
        lane: 'Manor place'
    }
};
// [ 'name', 'address' ]
console.log(Object.keys(student));
