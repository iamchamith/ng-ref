// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/

import { Student } from "../typescript/concepts/tsGenaric";

// get properties of an object.
export interface student {
    name: string;
    address: { no: string, lane: string };
}

// create object
const student = Object.create({
    name: 'Chamith',
    address: {
        no: '123',
        lane: 'Manor place'
    }
} as unknown as Student);

// [ 'name', 'address' ]
console.log(Object.keys(student));




