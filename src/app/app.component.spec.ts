function addTwo(num: number) {
  return num + 2;
}

describe('AppComponent', () => {
  let firstNum = 0;
  let actualResult = 0;

  // THIS IS EXACTLY LIKE A `beforeEach`
  // It's where you setup your code / inputs
  Given(() => {
    firstNum = 1;
  });

  // THIS IS A SPECIAL TYPE OF `beforeEach`
  // It's where you call the action under test
  When(() => {
    actualResult = addTwo(firstNum);
  });

  // THIS IS EXACTLY LIKE A `it()`
  // It's where you expect the desired outcome
  Then(() => {
    expect(actualResult).toEqual(3);
  });

  // You can also add a message
  Then('it should be equal to 3', () => {
    expect(actualResult).toEqual(3);
  });
});
