import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.listOfEmployees= this.employeeService.getlistOfData();
    console.log("Getting data from service class")
  }
  listOfEmployees:Employee[];

}

export class Employee {

  constructor(
    public employee: string,
    public emplyeeId: number,
    public salary: number,
    public department: string
  ) { }
}
