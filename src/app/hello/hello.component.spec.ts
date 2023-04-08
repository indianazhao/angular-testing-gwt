import { TestBed } from '@angular/core/testing';
import { HelloComponent, ServiceOne, ServiceTwo } from './hello.component';

describe('Method: getWelcomingMessage', () => {

  let actualResult: string, expectedResult: string;
  let fakeUserName: string;
  let componentUnderTest: HelloComponent;

  Given(() => {

    TestBed.configureTestingModule({
      providers: [
        HelloComponent,
        ServiceOne,
        ServiceTwo,
      ]
    });

    componentUnderTest = TestBed.inject(HelloComponent);
  });

  When(() => {
    actualResult = componentUnderTest.getWelcomingMessage(fakeUserName);
  });

  describe('user name is Indiana', () => {
    Given(() => {
      componentUnderTest.greeting = 'Hola';
      fakeUserName = 'Indiana';
    });

    Then('Should return Hello with Indiana', () => {
      expectedResult = 'Hola Indiana';
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('user name is Alex', () => {
    Given(() => {
      fakeUserName = 'Alex';
    });

    Then('Should return Hello with Alex', () => {
      expectedResult = 'Hello Alex';
      expect(actualResult).toEqual(expectedResult);
    });
  });

});
