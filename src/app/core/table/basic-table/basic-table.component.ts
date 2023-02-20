import { Component, OnInit } from '@angular/core'; 
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {

  public cars: Car[] = [];
  public filterCars: Car[] = [];
  public selectedCar: Car = {} as Car;
  public colors: string[] = ['Red', 'Green', 'Yellow', 'Blue'];
  public years: number[] = [];
  constructor(private confirmationService: ConfirmationService) {

    for (let i: number = 2000; i <= 2023; i++) {
      this.years.push(i);
    }

  }
  display: boolean = false;
  ngOnInit(): void {
    this.cars = this.filterCars = [{ brand: 'Toyota', color: 'Red', vin: 1, year: 2011, flag: false },
    { brand: 'Tata', color: 'Green', vin: 2, year: 2000, flag: false },
    { brand: 'Benze', color: 'Red', vin: 3, year: 2002, flag: false },
    { brand: 'BMW', color: 'Yellow', vin: 4, year: 2005, flag: false },
    { brand: 'Nissan', color: 'Blue', vin: 5, year: 2020, flag: false },
    { brand: 'Isuzu', color: 'Red', vin: 6, year: 2012, flag: false }];
  }

  Delete(car: Car) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.cars = this.cars.filter(p => p.vin !== car.vin);
      }
    });
  }
  View(car: Car) {
    this.selectedCar = car;
    this.display = true;
  }
  Flag(car: Car) {
    const targetIndex = this.cars.findIndex(p => p.vin === car.vin);
    this.cars[targetIndex].flag = !this.cars[targetIndex].flag;
  }
  showBasicDialog() {
    this.display = true;
  }
  Update() {
    alert(JSON.stringify(this.selectedCar));
  }
  changeYear(year: any) {
    this.selectedCar.year = year;
  }
  changeColor(color: any) {
    this.selectedCar.color = color;
  }
}
export interface Car {
  vin: number;
  year: number;
  brand: string;
  color: string;
  flag: boolean;
}