export class Entity {
    id!: string
}

export class Student extends Entity {
    name!: string;
    age!: number;
}

export class Repository<T = Entity> {

    public create(item: T): string {
        return '';
    }
    public update(item: T): void {
    }
    public delete(itemId: string): void {
    }
    public getById(itemId: string): T | null {
        return null;
    }
    public get(): T[] | null {
        return null;
    }
}

export class StudentService {

    constructor(private readonly _studentRepository: Repository<Student>) { }

    public create() {
        this._studentRepository.create({ id: '123', name: 'Chamith', age: 12 });
    }
    public update() {
        this._studentRepository.update({ id: '123', name: 'Chamith', age: 12 });
    }
    public delete() {
        this._studentRepository.delete('123');
    }
    public getById() {
        this._studentRepository.getById('123');
    }
    public get() {
        this._studentRepository.get();
    }
}