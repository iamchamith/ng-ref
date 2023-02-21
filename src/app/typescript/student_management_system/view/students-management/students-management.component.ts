import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from '../../model/student.model';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html'
})
export class StudentsManagementComponent {
  public userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(new Date()),
    subjects: new FormControl([])
  });

  private readonly _userid: string | null = '';
  public type: string = ''
  constructor(private readonly _studentService: StudentService, private readonly _route: ActivatedRoute) {
    this._userid = '7f3d6b0c-3df4-4943-9fc4-a75d1ea0200e';//this._route.snapshot.queryParamMap.get('id');
    if (this._userid) {
      this.type = "Update";
      this.loadStudent();
    }
    else {
      this.type = "Create";
    }
  }

  loadStudent() {
    const student = this._studentService.getById(this._userid ?? '') as StudentModel;
    this.userForm.controls['name'].setValue(student.name);
    this.userForm.controls['email'].setValue(student.email);
    this.userForm.controls['dob'].setValue(student.dob);
    // this.userForm.controls['subjects'].setValue(student.subjects);
  }

  public save() {

  }
}
