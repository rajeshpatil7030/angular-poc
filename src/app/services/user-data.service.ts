import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

    users = [
    {id: 1, name: "Rajesh", description: "Description : ", age: 30},
    {id: 2, name: "Praveen", description: "Description : ", age: 25},
    {id: 3, name: "Nikhil", description: "Description : ", age: 35},
    {id: 4, name: "Prashant", description: "Description : ", age: 45}
  ];
  constructor() { }

  public getUsers():Array<{id, name, description, age}>{
    return this.users;
  }
}
