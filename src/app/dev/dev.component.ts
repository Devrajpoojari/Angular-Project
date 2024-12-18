import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'FirstProject';
  message="Hii Friends How are you, I'm here to teach you angular";
  num1=90;
  num2=340;
  flag=false;

eventDate="";

twoWayData="";

  eventMethod(){
    alert("Event Triggered");
  }

  typingEvent(value){
    this.eventDate="";
    this.eventDate=this.eventDate+value;
   console.log(value)
  }

}
