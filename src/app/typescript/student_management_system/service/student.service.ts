import { Injectable } from "@angular/core";
import { GetListResponse } from "../../infrastructure/get-list.response.model";
import { PaginModel } from "../../infrastructure/pagin.model";
import { RepositoryService } from "../../infrastructure/repository.service";
import { StudentListModel } from "../model/student-list.model";
import { StudentModel } from "../model/student.model";

@Injectable({
    providedIn: 'root',
})
export class StudentService {

    private studentRepositoryRoutes = {
        createStudentRoute: '/students',
        updateStudentRoute: '/students',
        deleteStudentRoute: '/students',
        getByIdRoute: '/students',
        getRoute: '/students'
    };
    constructor(private readonly repositoryService: RepositoryService) { }
    public create(student: StudentModel): string | void {
        this.repositoryService.create<StudentModel, string>(this.studentRepositoryRoutes.createStudentRoute, student).subscribe((data) => {
            return data;
        });
    }
    public update(student: StudentModel): boolean | void {
        this.repositoryService.update<StudentModel, boolean>(this.studentRepositoryRoutes.updateStudentRoute, student).subscribe((data) => {
            return data;
        });
    }
    public delete(studentId: string): boolean | void {
        this.repositoryService.delete(this.studentRepositoryRoutes.deleteStudentRoute, studentId).subscribe(() => {
            return true;
        });
    }
    public getById(studentId: string): StudentModel | void {
        this.repositoryService.getById<StudentModel>(this.studentRepositoryRoutes.getByIdRoute, studentId).subscribe((data) => {
            return data;
        });
    }
    public get(pagin: PaginModel) {
        this.repositoryService.get<GetListResponse<StudentListModel>>(this.studentRepositoryRoutes.getRoute, pagin).subscribe((data) => {
            return data;
        });
    }

}