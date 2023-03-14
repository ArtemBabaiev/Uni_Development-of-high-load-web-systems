import {Component, OnInit} from '@angular/core';
import {User, USERS_STORAGE_KEY} from "../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) ?? "[]");
  }
}
