import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Link} from "../app.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
