var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('factorial of 5', ()=>{
      //Setup
      const inputNumber = 5;
      const expectedResult = 120;

      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });
    it('factorial of 3', ()=>{
      //Setup
      const inputNumber = 3;
      const expectedResult = 6;

      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });
    it('factorial of 0 is 1', ()=>{
       //Setup
      const inputNumber = 0;
      const expectedResult = 1;

      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});