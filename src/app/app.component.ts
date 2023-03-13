import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rest-api-angular';
  window = window;
  // @ts-ignore
  FRONTEND_URL = process.env.FRONTEND_URL;


}
