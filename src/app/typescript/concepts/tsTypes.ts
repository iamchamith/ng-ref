// index type types
export interface HashTable {
    [key: string]: any;
}
export class HashTableFunc {

    private _hash: HashTable = {};
    add(key: string, obj: any) {
        this._hash[key] = obj;
    }
    get(key: string) {
        return this._hash[key];;
    }
}

var a = new HashTableFunc();
a.add('one', { name: 'Chamith' });
a.add('two', { name: 'Sarath', age: 23 });
console.log(a.get('one'));
console.log(a.get('two'));

// merge types
export interface SriLanka {
    nic: string
}
export interface NewZealand {
    taxNumber: string;
}
export type DualCitizen = SriLanka & NewZealand;
const dc: DualCitizen = {
    nic: '880240684v',
    taxNumber: '123123121'
}

//spread
// console.log(['789789','123123',...dc.nic]);