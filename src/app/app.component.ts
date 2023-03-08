import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLab';
  logoPath: string = "/assets/images/logo.svg";
  currentUser: string = "Art_B"
  userPicture: string = "/assets/images/user.svg"

  navBarLinks: Link[] = [
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
  ]

  isTableView: boolean = false;

  helloMessage: string = "";
  data = [
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
  ];



  changeViewClick(){
    this.isTableView = !this.isTableView;
  }


}

export interface Link {
  label: string;
  active: boolean;
}
