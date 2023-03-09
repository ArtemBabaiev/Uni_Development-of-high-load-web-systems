import {Component, OnInit} from '@angular/core';

export const USERS_STORAGE_KEY = "users";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  users: User[] = [
    {
      id: 1,
      name: 'Victor',
      lastname: 'Velichko',
      dateOfBirth: new Date("2/1/1990"),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 10,
      name: 'Kate',
      lastname: 'Doe',
      dateOfBirth: new Date("6/6/1980"),
      salary: 88000,
      workingHours: 12345
    }
  ]

  ngOnInit(): void {
    if (localStorage.getItem(USERS_STORAGE_KEY) == undefined){
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(this.users))
    }
  }
}
export interface User {
  id: number,
  name: string,
  lastname: string,
  dateOfBirth: Date,
  salary: number,
  workingHours: number
}
