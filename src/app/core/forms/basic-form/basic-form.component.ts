import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../utilityComponents/loader.service';
import { SpinnerComponent } from '../../utilityComponents/spinner/spinner.component';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  //properties
  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl(''),
    birthDay: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    country: new FormControl({ id: 0, value: 'Select your country' }),
    zip: new FormControl(''),
    hasVehicle: new FormControl(false),
    hasProperties: new FormControl(false),
    gender: new FormControl('0')
  });
  get name() { return this.userForm.get('name'); }
  get country() { return this.userForm.get('country'); }
  public countries: { id: number, value: string }[] = [
    { id: 0, value: 'Select your country' },
    { id: 1, value: 'Sri Lanka' },
    { id: 2, value: 'New Zealand' },
    { id: 5, value: 'Australia' },
    { id: 4, value: 'Singapore' }
  ];

  public agreed: boolean = false;
  public familyMember: boolean = false;
  public user!: User;
  public newFamilyMember: string = '';
  constructor(private loadingService: LoaderService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.onLoad();
  }

  public onAgreedChange(event: any) {
    this.agreed = event.target.checked;
  }
  public onMarried(event: any) {
    this.familyMember = event.target.checked;
    console.log(this.familyMember);
  }

  public onAddFamilyMember() {
    this.user.familyMember.push(this.newFamilyMember);
    this.newFamilyMember = '';
  }
  public onRemoveFamilyMember(name: string) {
    this.user.familyMember = this.user.familyMember.filter(item => item !== name)
    this.newFamilyMember = '';
  }
  private onLoad() {
    this.user = {
      id: '12365',
      name: 'Chamith',
      email: 'iamchamith@gmail.com',
      address: '22/Manor place , Dunedine',
      country: 2,
      zip: '11020',
      hasVehicle: true,
      hasProperties: true,
      gender: 1,
      birthDay: new Date('1998-01-24'),
      familyMember: ["Malissa", "Maheesh"]
    };
    this.userForm.controls['name'].setValue(this.user.name);
    this.userForm.controls['email'].setValue(this.user.email);
    this.userForm.controls['address'].setValue(this.user.address);
    this.userForm.controls['country'].setValue(this.countries[this.countries.findIndex(p => p.id === this.user.country)]);
    this.userForm.controls['zip'].setValue(this.user.zip);
    this.userForm.controls['hasVehicle'].setValue(this.user.hasVehicle);
    this.userForm.controls['hasProperties'].setValue(this.user.hasProperties);
    this.userForm.controls['gender'].setValue(this.user.gender.toString());
    this.userForm.controls['birthDay'].setValue(new Date().toLocaleDateString());
  }

  register() {
    this.loadingService.setLoading(true);
    setTimeout(() => {
      this.loadingService.setLoading(false);
      this.toastr.success('Updated', 'User data has been updated');
    }, 3000);
  }

  public selectionChanged(event: any) {
    this.userForm.controls['country'].clearValidators();
    if (event.target["selectedIndex"] == 0) {
      this.userForm.controls['country'].setValidators([
        Validators.required
      ]);
    }
    this.userForm.updateValueAndValidity();
  }
}

export interface User {
  id: string,
  name: string,
  birthDay: Date,
  email: string,
  address: string,
  country: number,
  zip: string,
  hasVehicle: boolean,
  hasProperties: boolean,
  gender: number,
  familyMember: string[]
}