import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1DataComponent {
  @Input() name!: string;
  @Input() address!: { no: string, lane: string, city: string, zip: string };
  @Input() skills!: string[];
}
