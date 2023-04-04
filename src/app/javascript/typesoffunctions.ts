// normal
function add(one: number, two: number): number { return one + two; }

// function expression
const sub = function (one: number, two: number): number { return one - two; }

// nested functions
const mul = function (one: number, two: number): number {
    const arg = function (a: number) {
        return a * a;
    }
    return arg(one) + arg(two);
}


console.log(add(10, 15));
console.log(sub(10, 15));