/* global describe, it */
const assert = require('assert');
const humanizr = require('./');

const tCases = {
  1: 'LOWER_CASE',
  2: 'UPPER_CASE',
  3: 'SENTENCE_CASE',
  4: 'TITLE_CASE'
};

const testStrings = {
  'myCar': {
    1: 'my car',
    2: 'MY CAR',
    3: 'My car',
    4: 'My Car'
  },
  'my_car': {
    1: 'my car',
    2: 'MY CAR',
    3: 'My car',
    4: 'My Car'
  },
  'My-cars_areMine': {
    1: 'my cars are mine',
    2: 'MY CARS ARE MINE',
    3: 'My cars are mine',
    4: 'My Cars Are Mine'
  }
}

describe(`Check constants`, () => {
  Object.keys(tCases).forEach(tCase => {
    it(`should be ${tCase}`, () => {
      assert.equal(humanizr[tCases[tCase]], tCase);
    });
  });
});

describe('Humanizr humanify', () => {
  it('should throw an error', () => {
    assert.throws(() => humanizr.humanify({}), Error);
  });

  it('should throw an error', () => {
    assert.throws(() => humanizr.humanify(null), Error);
  });

  Object.keys(testStrings).forEach(testString => {
    Object.keys(testStrings[testString]).forEach(tCase => {
      it(`should return human readable ${testString} in ${tCases[tCase]}`, () => {
        assert.strictEqual(humanizr.humanify(testString, humanizr[tCases[tCase]]), testStrings[testString][tCase]);
      });
    })
  });
})