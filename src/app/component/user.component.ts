import { Component, OnInit } from "@angular/core";


@Component(
    {
        selector: 'user-app',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    }
)
export class UserComponent implements OnInit {

    ngOnInit(): void {

    }
    flag=true;

    changeFlag(){
        this.flag=false;
    }
    changeFlag1(){
        this.flag=true;
    }

}