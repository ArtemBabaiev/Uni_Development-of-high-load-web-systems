import { Component } from '@angular/core';

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

}
