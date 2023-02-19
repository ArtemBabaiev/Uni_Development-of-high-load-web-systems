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
      label: "Point",
      active: false,
    },
    {
      label: "About",
      active: false,
    }
  ]

}

export interface Link {
  label: string;
  active: boolean;
}
