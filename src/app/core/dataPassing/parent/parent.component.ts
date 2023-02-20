import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentDataComponent {

  public pageTitle: string = 'My Self';
  public name: string = 'Chamith';
  public address: { no: string, lane: string, city: string, zip: string } =
    {
      city: 'Ganemulla',
      no: '290/8',
      lane: 'Kadawatha Road',
      zip: '91102'
    };
  public skills: string[] = ['C sharp', 'angular'];

  onChild2TextChangedHandler(data: { pageTitle: string; personName: string; }) {
    this.pageTitle = data.pageTitle;
    this.name = data.personName;
  }
}
