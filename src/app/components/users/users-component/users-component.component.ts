import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponentComponent implements OnInit {

  users ;
  selectedUser;
  constructor(public userService: UserDataService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();    
  }
  public selectUser(user){
    this.selectedUser = user;
  }

}
