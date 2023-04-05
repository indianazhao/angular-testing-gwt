import { HelloComponent } from './hello.component';

describe('Method: getWelcomingMessage', () => {

  let actualResult: string, expectedResult: string;
  let fakeUserName: string;
  let componentUnderTest: HelloComponent = new HelloComponent();

  When(() => {
    actualResult = componentUnderTest.getWelcomingMessage(fakeUserName);
  });

  describe('user name is Indiana', () => {
    Given(() => {
      fakeUserName = 'Indiana';
    });

    Then('Should return Hello with Indiana', () => {
      expectedResult = 'Hello Indiana';
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
