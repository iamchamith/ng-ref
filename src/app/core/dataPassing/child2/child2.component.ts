import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
})
export class Child2DataComponent {
  @Output() onChild2TextChanged = new EventEmitter<{ pageTitle: string, personName: string }>();
  public pageTitle!: string;
  public personName!: string;

  public textChange(): void {
    this.onChild2TextChanged.emit({ pageTitle: this.pageTitle, personName: this.personName });
  }
}
