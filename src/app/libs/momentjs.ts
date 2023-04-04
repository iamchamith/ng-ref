import * as moment from 'moment';

export class MomentJs {
  bookingDate!: Date;
  constructor() {
    this.bookingDate = new Date('2023-03-01T01:12:51Z');
  }

  convertUtcTimeToGivenTimeZone() {
    // should be 2023-03-01T14:12:51+13:00
    console.log(moment(this.bookingDate, 'Pacific/Auckland').format());
  }

  formatDateTime() { 
    console.log(moment(this.bookingDate, 'Pacific/Auckland').format('YYYY-MM-DD'));
    console.log(moment(this.bookingDate, 'Pacific/Auckland').format('h:mm:ss a'));
    console.log(moment(this.bookingDate, 'Pacific/Auckland').format('YYYY-MM-DD, h:mm:ss a'));
    console.log(moment(this.bookingDate, 'Pacific/Auckland').format('HH:mm:ss'));//24 hour clock
  }

}

new MomentJs().formatDateTime();