import { HelloService } from './hello.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  greeting: string = 'Hello';
  users: User[] = [];

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.users = this.helloService.getAllUsers();
  }

  // direct input/output
  getWelcomingMessage(userName: string) {
    return `${this.greeting} ${userName}`;
  }

  // indirect input
  isUserListVisible() {
    return this.users.length > 0;
  }

  // indirect output
  resetUserList() {
    this.users = [];
  }
}
