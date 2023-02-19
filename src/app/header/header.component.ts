import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() userName: string = "";
  @Input() logo: string = "";
  @Input() profilePicture: string = "";

  @Output() logoClick = new EventEmitter<string>();

  onLogoClickEvent(){
    this.logoClick.emit("«Привіт світ!»");
  }
}
