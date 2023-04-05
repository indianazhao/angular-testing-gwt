import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getWelcomingMessage(userName: string) {
    return `Hello ${userName}`;
  }
}
