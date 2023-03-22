import {Component, OnInit} from '@angular/core';

export const USERS_STORAGE_KEY = "users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'AngularLab';
  logoPath: string = "/assets/images/logo.svg";
  currentUser: string = "Art_B"
  userPicture: string = "/assets/images/user.svg"

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

  routedLinks: RoutedLink[] = [
    {
      label: "Home",
      path: "/home",
      icon: "home"
    },
    {
      label: "Contacts",
      path: "/contacts",
      icon: "contacts"
    },
    {
      label: "About",
      path: "/about",
      icon: "info"
    },
    {
      label: "User form",
      path: "/userform",
      icon: "dashboard"
    },
  ]

  ngOnInit(): void {
    if (localStorage.getItem(USERS_STORAGE_KEY) == undefined){
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(this.users))
    }
  }

  /*navBarLinks: Link[] = [
    {
      label: "Home",
      active: true,
    },
    {
      label: "Contacts",
      active: false,
    },
    {
      label: "About",
      active: false,
    }
  ]*/
  /*isTableView: boolean = false;
  helloMessage: string = "";*/
  /*data = [
    {
      type: 1,
      visibility: true,
      name: "qwerty",
      category: "phone",
      quantity: 4,
      imgSource: "/assets/images/placeholder.svg"
    },
    {
      type: 2,
      visibility: false,
      name: "12345",
      category: "tablet",
      quantity: 7,
      imgSource: "/assets/images/placeholder.svg"

    },
    {
      type: 3,
      visibility: true,
      name: "qwe123",
      category: "laptop",
      quantity: 8,
      imgSource: "/assets/images/placeholder.svg"

    },
    {
      type: 2,
      visibility: true,
      name: "salivfalukh",
      category: "tablet",
      quantity: 7,
      imgSource: "/assets/images/placeholder.svg"

    }
  ];*/

  /*changeViewClick(){
    this.isTableView = !this.isTableView;
  }*/
}
export interface User {
  id: number,
  name: string,
  lastname: string,
  dateOfBirth: Date,
  salary: number,
  workingHours: number
}

export interface Link {
  label: string;
  active: boolean;
}

export interface RoutedLink {
  label: string;
  path: string;
  icon: string;
}
