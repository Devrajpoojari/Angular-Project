import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // <h2>Welcome to Angular Upskilling</h2>
  // <p>Hello sushma</p>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){}

  rout(){
    this.router.navigate(['table'])
  }
  
}
