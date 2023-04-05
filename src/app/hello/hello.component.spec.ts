describe('Method: getWelcomingMessage', () => {

  function getWelcomingMessage(userName: string) {
    return `Hello ${userName}`;
  }

  let actualResult: string, expectedResult: string;
  let fakeUserName: string;

  When(() => {
    actualResult = getWelcomingMessage(fakeUserName);
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
