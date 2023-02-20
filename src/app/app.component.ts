import { Component } from '@angular/core';
import { AllAboutComponent } from './core/components/all-about/about-component.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputText: string = '';
  title = 'CompleteTute';

}
