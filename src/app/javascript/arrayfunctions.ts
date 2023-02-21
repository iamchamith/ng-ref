export class ArrayFunctions {

    private _humans: Human[] = []
    constructor() {

        this._humans.push({ id: 1, name: 'Chamith', age: 56, city: 'Dunedine', country: 'Nz' });
        this._humans.push({ id: 2, name: 'Kasun', age: 21, city: 'Bali', country: 'SG' });
        this._humans.push({ id: 3, name: 'Sunil', age: 70, city: 'Ganemulla', country: 'SL' });
        this._humans.push({ id: 4, name: 'Nalin', age: 32, city: 'Ganemulla', country: 'SL' });
        this._humans.push({ id: 5, name: 'Dinidu', age: 54, city: 'Colombo', country: 'SL' });

        this._humans.push({ id: 6, name: 'Gihan', age: 21, city: 'Dunedine', country: 'Uk' });
        this._humans.push({ id: 7, name: 'Anton', age: 43, city: 'Kandana', country: 'SL' });
    }

    firstOrDefault() {
        const result = this._humans.find(p => p.id === 3);
        console.log('find result ' + JSON.stringify(result));
    }

    where() {
        const result = this._humans.filter(p => p.city === 'Ganemulla');
        console.log('filter result ' + JSON.stringify(result));
    }

    skip_take() {
        const skip = 2;
        const take = 5;
        const result = this._humans.slice(skip, skip + take);
        console.log('slice result ' + JSON.stringify(result));
    }

    any() {
        // const result = this._humans.includes(p => p.city === 'Kurunagala');
        // console.log('every result ' + result);
    }

    addRange() {
        this._humans.concat([{ id: 8, name: 'Rebeka', age: 43, city: 'Petersburg', country: 'Russia' }, { id: 9, name: 'Marry', age: 43, city: 'uka', country: 'Ukrain' }])
    }

    all() {
        const result = this._humans.every(p => p.id === 10);
        console.log('every result ' + result);
    }

    foreach() {
        const result = this._humans.forEach(p => p.age + 1);
        console.log('forEach result ' + JSON.stringify(this._humans));
    }

    distinct() { }

    removeAll() {

        const result = this._humans.filter(p => p.country !== 'SL');
        console.log('forEach removeAll ' + JSON.stringify(result));

    }

    min() { }

    max() { }

    sum() { }

    runAll() {
        this.firstOrDefault();
        this.where();
        this.skip_take();
        this.any();
        this.addRange();
        this.all();
        this.foreach();
        this.removeAll();
    }
}

export interface Human {
    id: number;
    name: string;
    city: string;
    age: number;
    country: string
}

const a = new ArrayFunctions();
a.runAll();