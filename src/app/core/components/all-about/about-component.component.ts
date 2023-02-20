import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AllAboutComponent implements OnInit {

  constructor() { }

  @Input() hero!: string;
  ngOnChanges(changes: SimpleChanges): void {
    /*call before ngOnInit.
    call when value bind or reset from input properties @Input*/
    console.log(changes);
  }
  ngOnInit(): void {
  }

}
