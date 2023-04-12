import {Component, OnInit} from '@angular/core';
import {User, USERS_STORAGE_KEY} from "../app.component";
import {Sort} from "@angular/material/sort";
import {NotificationsService} from "../notifications.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname'];
  users: User[] = [];

  sortedData: User[];

  constructor(private notificator: NotificationsService) {
  }

  onTestClick(){
    this.notificator.info("ButtonPressed")
  }


    ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) ?? "[]");
    this.sortedData = this.users.slice();
  }

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'lastname':
          return compare(a.lastname, b.lastname, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



