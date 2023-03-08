import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../home/home.component";

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit{

  userdata: User[] = [
    {
      id: 1,
      name: 'Victor',
      lastname: 'Velichko',
      dateOfBirth: new Date("2/1/1990"),
      salary: 50000,
      workingHours: 123_456_789
    },
    {
      id: 10,
      name: 'Kate',
      lastname: 'Doe',
      dateOfBirth: new Date("6/6/1980"),
      salary: 88000,
      workingHours: 12345
    }
  ];

  currentUser: User = {id: 0, name:'', dateOfBirth: new Date(), salary:0, lastname: '', workingHours:0};

  id: any = 0;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentUser = this.userdata.find(user => user.id == this.id) ?? {id: 0, name:'', dateOfBirth: new Date(), salary:0, lastname: '', workingHours:0};
  }
}
