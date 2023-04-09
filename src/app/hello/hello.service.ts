import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class HelloService {

  getAllUsers(): User[] {
    return [{
      name: 'Indiana',
      age: 28,
    }, {
      name: 'Annie',
      age: 22,
    }];
  }
}
