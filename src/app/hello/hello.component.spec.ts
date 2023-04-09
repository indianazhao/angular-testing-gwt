import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HelloComponent } from './hello.component';
import { HelloService } from './hello.service';
import { AnotherService } from './another.service';

describe('Method: getWelcomingMessage', () => {

  let actualResult: any, expectedResult: any;
  let fakeUserName: string;
  let componentUnderTest: HelloComponent;

  Given(() => {

    TestBed.configureTestingModule({
      providers: [
        HelloComponent,
        HelloService,
        AnotherService,
        HttpClient,
        HttpHandler,
      ],
    });

    componentUnderTest = TestBed.inject(HelloComponent);
  });

  describe('Method: getWelcomingMessage', () => {
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

  describe('INIT', () => {
    When(() => {
      componentUnderTest.ngOnInit();
    });

    Then(() => {
      expect(componentUnderTest.users.length).toBeGreaterThan(0);
    });
  });

  describe('Method: isUserListVisible', () => {

    When(() => {
      actualResult = componentUnderTest.isUserListVisible();
    });

    describe('there is user', () => {
      Given(() => {
        componentUnderTest.users = [{
          name: 'fakeName',
          age: 10,
        }];
      });

      Then('should be true', () => {
        expect(actualResult).toBe(true);
      });
    });

    describe('no user', () => {
      Given(() => {
        componentUnderTest.users = [];
      });

      Then('should be true', () => {
        expect(actualResult).toBe(false);
      });
    });

  });

  describe('Method: resetUserList', () => {
    Given(() => {
      componentUnderTest.users = [{
        name: 'fakeName',
        age: 10,
      }]
    });

    When(() => {
      componentUnderTest.resetUserList();
    });

    Then(() => {
      expect(componentUnderTest.users?.length).toBe(0);
    });
  });

});
