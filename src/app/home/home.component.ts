import { Component, OnInit } from '@angular/core';
import { LoginService } from '../global/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showUserList = true;
  showNewUser = false;
  userList = [];
  newUserList = [];
  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.service.navigate.subscribe(res => 
      {
        if (res === 'userList') {
          this.showUserList = true;
          this.showNewUser = false;
        } else {
          this.showUserList = false;
          this.showNewUser = true;
        }

      });
      const userList = JSON.parse(localStorage.getItem('userList'));
      this.newUserList.push(JSON.parse(localStorage.getItem('newUser')));

      if (userList) {
        const tableData = [];
        userList.map((item, index) => {
          if (item.user ) {
            tableData.push(
              {
                name: item.user.name.title + '. ' + item.user.name.first + ' ' + item.user.name.last,
                dob: new Date(item.user.dob),
                phone: item.user.phone,
                email: item.user.email,
                gender: item.user.gender,
                pwd: item.user.password,
                uname: item.user.username
              }
            )
          }
        });
        if (tableData.length || this.newUserList.length) {
          this.userList = [...tableData, ...this.newUserList];
        }
      }
  }

  newRegistration() {
    this.newUserList.push(JSON.parse(localStorage.getItem('newUser')));
    this.userList = [...this.userList, ...this.newUserList];
    this.showUserList = true;
    this.showNewUser = false;
  }
}
