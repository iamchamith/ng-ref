

@Frozen
export class Water {

    @ToLower()
    Name: string = 'Chamith';

}


//class decorator
function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

// property decorator

function ToLower() {
    const formatMetadataKey = Symbol("format");
    return function (target: any, key: string) {

        let val = target[key];

        const getter = () => { return val; }
        const setter = (next: string) => { return val.ToLower(); }
    }

}

console.log(new Water().Name);