import { Injectable } from '@angular/core';
import { Employee } from './component/ng-for/ng-for.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  listOfEmployees = [new Employee("Devraj", 34, 4000, "CSD"),
    new Employee("Megha", 324, 10000, "CSD"),
    new Employee("Tanmaya", 134, 4000, "CSD"),
    new Employee("Puru", 34, 90923, "CSD"),
    new Employee("Amit", 34, 4000, "CSD"),
    new Employee("Pooja", 34, 4000, "CSD"),
    new Employee("Kajal", 34, 4000, "CSD")
    ];
    getlistOfData(){
      return this.listOfEmployees;
    }
}
