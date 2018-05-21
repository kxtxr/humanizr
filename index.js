'use strict';
const decamelize = require('decamelize');

module.exports = {

  /**
   * Lower case constant
   * @type {integer}
   */
  LOWER_CASE: 1,

  /**
   * Upper case constant
   * @type {integer}
   */
  UPPER_CASE: 2,

  /**
   * Sentence case constant
   * @type {integer}
   */
  SENTENCE_CASE: 3,

  /**
   * Title case constant
   * @type {integer}
   */
  TITLE_CASE: 4,


  /**
   * @description Converts a variable name to human readable words.
   * Example myCar to My Car and my_car to My Car
   * 
   * @param {string} input - The variable to conver to readable word
   * @param {number} [tCase] - The returned phrase's case. 1 for lower,
   * 2 for upper, 3 for sentence, 4 for title.
   * @returns {string}
   */
  humanify(input, tCase) {
    if (typeof input !== 'string') {
      throw new Error('Expected a string but got ' + typeof input);
    }

    tCase = typeof tCase === 'undefined' ? this.SENTENCE_CASE : tCase;

    input = decamelize(input);
    input = input.toLowerCase().replace(/[_-]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
    input = input.charAt(0).toUpperCase() + input.slice(1);

    if (tCase === this.LOWER_CASE)
      return input.toLowerCase();

    if (tCase === this.UPPER_CASE)
      return input.toUpperCase();

    if (tCase === this.TITLE_CASE) {
      return input.toLowerCase().replace(/[^\s_\-/]*/g, function(word) {
        return word.replace(/./, function(ch) {
          return ch.toUpperCase();
        });
      });
    }

    return input.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(ch){
      return ch.toUpperCase()
    });
  }

}