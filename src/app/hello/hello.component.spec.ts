import { TestBed } from '@angular/core/testing';
import { HelloComponent } from './hello.component';
import { HelloService } from './hello.service';
import { createSpyFromClass, provideAutoSpy, Spy } from 'jest-auto-spies';

describe('Method: getWelcomingMessage', () => {

  let actualResult: any, expectedResult: any;
  let fakeUserName: string;
  let componentUnderTest: HelloComponent;

  // spy
  let helloServiceSpy: Spy<HelloService>;/*  = {
    getAllUsersCalled: false,
    getAllUsers() {
      this.getAllUsersCalled = true;
      return [{
        name: 'Indiana',
        age: 28,
      }, {
        name: 'Annie',
        age: 22,
      }];
    }
  }; */

  Given(() => {

    TestBed.configureTestingModule({
      providers: [
        HelloComponent,
        // {
        //   provide: HelloService,
        //   useValue: createSpyFromClass(HelloService),
        // }
        provideAutoSpy(HelloService),
      ],
    });

    componentUnderTest = TestBed.inject(HelloComponent);
    helloServiceSpy = TestBed.inject(HelloService) as Spy<HelloService>;
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
    Given(() => {
      helloServiceSpy.getAllUsers.mockReturnValue([{
        name: 'fakeName',
        age: 10,
      }]);
    });

    When(() => {
      componentUnderTest.ngOnInit();
    });

    Then(() => {
      expect(componentUnderTest.users.length).toBeGreaterThan(0);
      expect(helloServiceSpy.getAllUsers).toBeCalled();
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
