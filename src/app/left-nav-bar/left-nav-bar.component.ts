import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Link} from "../app.component";

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent {
  @Input() links: Link[] = [];

  @Output() linkClick = new EventEmitter<Link[]>();

  onLinkClick(label: string){
    for (const link of this.links) {
      if (link.label === label){
        link.active = true;
      }
      else{link.active = false;}
    }
    return this.links;
  }

}
