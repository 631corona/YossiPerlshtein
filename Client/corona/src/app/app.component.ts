import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona';
  username = 'username';
  constructor() {
    if(localStorage.getItem("username") !== null) {
     this.username = localStorage.getItem("username");
    } else {
     this.username = "Default Username"
    }
   }
}

