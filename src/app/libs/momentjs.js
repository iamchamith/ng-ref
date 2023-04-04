"use strict";
exports.__esModule = true;
exports.MomentJs = void 0;
var moment = require("moment");
var MomentJs = /** @class */ (function () {
    function MomentJs() {
        this.bookingDate = new Date('2023-03-01T01:12:51Z');
    }
    MomentJs.prototype.convertUtcTimeToGivenTimeZone = function () {
        // should be 2023-03-01T14:12:51+13:00
        console.log(moment(this.bookingDate, 'Pacific/Auckland').format());
    };
    MomentJs.prototype.formatDateTime = function () {
        console.log(moment(this.bookingDate, 'Pacific/Auckland').format('YYYY-MM-DD'));
        console.log(moment(this.bookingDate, 'Pacific/Auckland').format('h:mm:ss a'));
        console.log(moment(this.bookingDate, 'Pacific/Auckland').format('YYYY-MM-DD, h:mm:ss a'));
        console.log(moment(this.bookingDate, 'Pacific/Auckland').format('HH:mm:ss')); //24 hour clock
    };
    return MomentJs;
}());
exports.MomentJs = MomentJs;
new MomentJs().formatDateTime();
