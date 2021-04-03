import { Component } from '@angular/core';
import { NewComponentComponent } from './new-component/new-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private NewComponent: NewComponentComponent) {}

  async renderNewComponent(): Promise<any> {
    return await NewComponentComponent
  }
}
