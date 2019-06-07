/**
 *@class
 */
export default class Helpers {
  /**
   * @description This is a helper function to capitalize a word or a sentence
   * @param  {string} sentence The word or just a sentence to be capitalized
   * @returns {sting} It returns the word or sentence with each first letter capitalized
   */
  static capitalize = sentence => {
    let capitalized = '';
    sentence.split(' ').forEach(name => {
      capitalized += ` ${name.charAt(0).toUpperCase()}${name
        .substring(1)
        .toLowerCase()}`;
    });
    return capitalized.trim();
  };
}
