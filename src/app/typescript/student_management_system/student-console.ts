import { StudentService } from "./service/student.service";

export class StudentClient {

    constructor(private readonly studentService: StudentService) { }

    public create() {
        this.studentService.create({
            dob: new Date('1988-01-24'),
            email: 'iamchamith@gmail.com',
            name: 'Chamith Saranga',
            subjects: [1, 2],
            id: '0'
        });
        console.log('student created');
    }
    public update() {
        this.studentService.update({
            dob: new Date('1988-01-24'),
            email: 'iamchamith@gmail.com',
            name: 'Ruwan',
            subjects: [1, 2],
            id: '1'
        });
        console.log('student updated');
    }

    public delete() {
        this.studentService.delete('1');
        console.log('student deleted');
    }

    public getById() {
        const result = this.studentService.getById('1');
        console.log(JSON.stringify(result));
    }

    public get() {
        const result = this.studentService.get({
            skip: 0, take: 10,
            orderBy: undefined,
            orderByTerm: undefined,
            searchByTerm: undefined
        });
        console.log(JSON.stringify(result));
    }
}