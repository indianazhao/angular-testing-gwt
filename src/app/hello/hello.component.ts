import { Component, OnInit } from '@angular/core';

export class ServiceOne {
  do1(){}
}

export class ServiceTwo {
  do2(){}
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  greeting: string = 'Hello';

  constructor(
    serviceTwo: ServiceTwo,
    serviceOne: ServiceOne,
  ) { }

  ngOnInit(): void {
  }

  getWelcomingMessage(userName: string) {
    return `${this.greeting} ${userName}`;
  }
}
