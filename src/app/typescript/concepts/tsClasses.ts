
export abstract class Employee {
    public id!: string;
    public name!: Name;//trust me. there is a value
    public displayName?: string; // can be undefined .  this like string|undefinded
    public roles: string[] = ['user']; // create variable with default values
    public readonly createdBy!: Date;
    public gender!: Gender
    constructor() {
        this.createdBy = new Date();
    }

    abstract calculateSalary(yearPayment: number): number;

    printMyInfo() {
        console.log('Hi I am a employee');
    }
}

export class FullTimeEmployee extends Employee implements ICalculateBonus {

    override roles: string[] = ['user', 'fulltime-employee'];
    private _salary!: number;
    paymentMode!: PaymentMode;
    set salary(val: number) {
        if (val < 0)
            throw Error('Salary should not less than 0');
        else if (val > 10000)
            throw Error('Salary should not greater than 10000');
        this._salary = val;
    }
    get salary() { return this._salary; }
    constructor() {
        super();
    }
    calculateSalary(yearPayment: number): number {
        if (this.paymentMode == "monthly")
            return yearPayment / 12;
        else if (this.paymentMode == "weekly")
            return yearPayment / 52;
        throw Error('argument');
    }

    calculateBonus(precentage: number): number {
        return this._salary * precentage;
    }

    override printMyInfo(): void {
        console.log('Hi I am a full time employee');
    }

    // METHOD OVERLOAD NOT SUPPORT
    // addAllownces(vehicle: number): number;
    // addAllownces(vehicle: number, house: number): number;
    // addAllownces(vehicle: number, house: number, utility: number): number { 
    // };

}

export interface ICalculateBonus {
    calculateBonus(precentage: number): number;
}

export enum Gender {
    girl,
    boy
}

//union type
type PaymentMode = "weekly" | "monthly";

type Name = {
    firstName: string,
    lastName: string
}