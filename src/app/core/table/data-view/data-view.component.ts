import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from './products';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html'
})
export class DataViewComponent implements OnInit {
  products!: Product[];
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

   this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; })
      .then(data => this.products = data);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }
}