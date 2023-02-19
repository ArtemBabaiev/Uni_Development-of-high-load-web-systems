import {Component, Input} from '@angular/core';
import {Link} from "../app.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() links: Link[] = [];
}
