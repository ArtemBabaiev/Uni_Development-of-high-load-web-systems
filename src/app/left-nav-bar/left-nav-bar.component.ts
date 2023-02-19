import {Component, Input} from '@angular/core';
import {Link} from "../app.component";

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent {
  @Input() links: Link[] = [];

}
