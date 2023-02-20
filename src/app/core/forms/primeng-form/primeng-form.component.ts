import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-primeng-form',
  templateUrl: './primeng-form.component.html',
  styleUrls: ['./primeng-form.component.css']
})
export class PrimengFormComponent implements OnInit {

  public countries!: Country[];
  public selectedCountry!: Country;
  public user!: User;
  public alleducations!: string[];

  public userForm = new FormGroup({
    name: new FormControl('Chamith Saranga'),
    birthDay: new FormControl(new Date('1998-01-24')),
    country: new FormControl({ id: 3, value: 'Sri Lanka' } as unknown as Country),
    hasVehicle: new FormControl(false),
    hasProperties: new FormControl(true),
    gender: new FormControl('1'),
    phoneNumber: new FormControl('071-89 20205'),
    salary: new FormControl(1500),
    educations: new FormControl(['Bsc', 'Msc'])
  });

  constructor(private messageService: MessageService) {
    this.countries = [
      { name: 'New Zealand', code: 1 },
      { name: 'Australia', code: 2 },
      { name: 'Sri Lanka', code: 3 },
      { name: 'India', code: 4 },
      { name: 'Pakisthan', code: 5 }
    ];
  }
  ngOnInit(): void {
    this.alleducations = ['OL', 'AL', 'Bsc', 'Msc'];
    this.selectedCountry = this.countries[2];
  }

  save() {
    this.user = {
      id: '132',
      name: this.userForm.controls['name'].value,
      birthDay: this.userForm.get('birthDay')?.value,
      hasVehicle: this.userForm.get('hasVehicle')?.value,
      hasProperties: this.userForm.get('hasProperties')?.value,
      gender: this.userForm.get('gender')?.value,
      phoneNumber: this.userForm.get('phoneNumber')?.value,
      salary: this.userForm.get('salary')?.value,
      educations: this.userForm.get('educations')?.value,
    } as unknown as User
    console.log(this.user);
    this.messageService.add({severity:'success', summary:'Saved', detail:'Successfull saved'});
  }
}
export interface User {
  id: string | null,
  name: string | null,
  birthDay: Date,
  country: number,
  hasVehicle: boolean,
  hasProperties: boolean,
  gender: number,
  phoneNumber: string,
  salary: number,
  educations: string[]
}
interface Country {
  name: string,
  code: number
}