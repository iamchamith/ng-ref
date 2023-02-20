import { Component, Injectable, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-lazy-table',
  templateUrl: './lazy-table.component.html',
  styleUrls: ['./lazy-table.component.css']
})
export class LazyTableComponent implements OnInit {

  public cars: Car[] = [];
  public filterCars: Car[] = [];
  public selectedCar: Car = {} as Car;
  public colors: string[] = ['Red', 'Green', 'Yellow', 'Blue'];
  public years: number[] = [];
  public totalRecords!: number;
  public loading!: boolean;
  constructor(private readonly carRepository: CarRepository) { }
  ngOnInit(): void {
    this.loading = true;
  }

  public loadVehicles(event: LazyLoadEvent) {
    setTimeout(() => {
      this.cars = this.filterCars = this.carRepository.getCars(event.first ?? 0, (event.first ?? 0) + (event.rows ?? 0));
      this.totalRecords = 25;
      this.loading = false;
    }, 1000);
  }
}
export interface Car {
  vin: number;
  year: number;
  brand: string;
  color: string;
  flag: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CarRepository {

  public getCars(skip: number, take: number): Car[] {

    return [{ brand: 'Toyota', color: 'Red', vin: 1, year: 2011, flag: false },
    { brand: 'Tata', color: 'Green', vin: 2, year: 2000, flag: false },
    { brand: 'Benze', color: 'Red', vin: 3, year: 2002, flag: false },
    { brand: 'BMW', color: 'Yellow', vin: 4, year: 2005, flag: false },
    { brand: 'Nissan', color: 'Blue', vin: 5, year: 2020, flag: false },
    { brand: 'Isuzu', color: 'Red', vin: 6, year: 2012, flag: false },

    { brand: 'Suzuki', color: 'Green', vin: 7, year: 2000, flag: false },
    { brand: 'Farari', color: 'Red', vin: 8, year: 2002, flag: false },
    { brand: 'Mitsubishi', color: 'Yellow', vin: 9, year: 2005, flag: false },
    { brand: 'Ford', color: 'Blue', vin: 10, year: 2020, flag: false },
    { brand: 'Mahendra', color: 'Red', vin: 11, year: 2012, flag: false },

    { brand: 'Fiat', color: 'Green', vin: 12, year: 2000, flag: false },
    { brand: 'Voxwagon', color: 'Red', vin: 13, year: 2002, flag: false },
    { brand: 'Land-rover', color: 'Yellow', vin: 14, year: 2005, flag: false },
    { brand: 'GM', color: 'Blue', vin: 15, year: 2020, flag: false },
    { brand: 'Volvo', color: 'Red', vin: 16, year: 2012, flag: false },

    { brand: 'Bently', color: 'Green', vin: 17, year: 2000, flag: false },
    { brand: 'Peggani', color: 'Red', vin: 18, year: 2002, flag: false },
    { brand: 'Rollesroy', color: 'Yellow', vin: 19, year: 2005, flag: false },
    { brand: 'Honda', color: 'Blue', vin: 20, year: 2020, flag: false },
    { brand: 'Subaru', color: 'Red', vin: 21, year: 2012, flag: false },

    { brand: 'Hyundai', color: 'Green', vin: 22, year: 2000, flag: false },
    { brand: 'Kia', color: 'Red', vin: 23, year: 2002, flag: false },
    { brand: 'Lambogini', color: 'Yellow', vin: 24, year: 2005, flag: false },
    { brand: 'Tesla', color: 'Blue', vin: 25, year: 2020, flag: false },
    { brand: 'Subaru', color: 'Red', vin: 66, year: 2012, flag: false }
    ].slice(skip, take)
  }
}