// 1. Write a function that checks to see if a word is the same spelled forwards and backwards
// *****************************************************************************************************************************************************************

var string = 'madam';

function wordCheck(string) {
  var a1;
  var a2;
  a1 = string.split('').join('');
  a2 = string.split('').reverse().join('');

   if (a1 === a2) {
    return true;
   }
   else {
    return false;
   }
}
wordCheck(string)

// 2. Write a function that takes in a string and turn each individual letter to the opposite case
// *****************************************************************************************************************************************************************

function changeCase(string) {
  var a1;
  a1 = string.spilt('')
  a1.map(function(a, b, c) {
    if (a1[b] == a1[b].toUpperCase()) {
      return a1[b] = a1[b].toLowerCase()
    }
  })
}

// 3. Write a function that takes in all the stock prices for one day and decide what time the user should buy and sell the stock
// Q. how can i convert an array of 25 numbers into time
// *****************************************************************************************************************************************************************
var prices = [5, 10, 20, 5, 10, 15, 20, 5, 25, 10, 5, 10, 20, 5, 10, 15, 20, 5, 40, 10,
25, 10, 5, 5]

function stock(array) {
  var checkForProfit = 0;
  var diff = 0;
  var index;
  var timeToBuy;
  var timeToSell;

  for (var i = 0; i < array.length; i++) {
    for (var k = i + 1; k < array.length; k++) {
      checkForProfit = array[k] - array[i]
      if (checkForProfit > diff) {
        diff = checkForProfit;
        timeToBuy = array[i];
        timeToSell = array[k];

      }
    }
  }
  return timeToBuy + ',' + timeToSell;
}

stock(prices)

// 3. Write a function that takes in a phone number and formats the number to the correct format
// *****************************************************************************************************************************************************************
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(array){
  var beg = array.slice(0, 3).join('')
  var beg2 = beg.toString()

  var mid = array.slice(3, 6).join('')
  var mid2 = mid.toString()

  var end = array.slice(6, 10).join('')
  var end2 = end.toString()

  return "(" + beg2 + ")" + " " + mid2 + "-" + end
}
// 4. Write a function takes in a number and return ture of false if the number is prime or not
// *****************************************************************************************************************************************************************

function isPrime(num) {
  if (num <= 1) {
    return false
  }
  if (num === 2 || num === 3) {
    return true
  }
  else if (num > 1) {
    if (num % 2 > 0 & num % 3 > 0) {
      return true;
    }
    else {
    	return false
    }
  }

}

isPrime(-1)
// 4. Write a function
// We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:
// they are present in both ones
// they occur more than once in A and more than once in B
// their values are within a given range
// thay are odd or even according as it is requested
// https://www.codewars.com/kata/find-a-bunch-of-common-elements-of-two-lists-in-a-certain-range/train/javascript
// *****************************************************************************************************************************************************************
arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
// 0, 1, 2, 3, 7,
function findArr(arrA, arrB) {
  for (var i = 0; i < arrA.length; i++) {
        if (arrB.indexOf(i) > -1) {
          matches.push(arrA[i]);
        }
  }
}

findArr(arrA, arrB)
// 5.Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// - each taken only once - coming from s1 or s2.
// *****************************************************************************************************************************************************************
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"


function longest(s1, s2) {
  var a1 = [];
  var a2 = [];
    a1 = s1.split('').sort()
    a2 = s2.split('')

    for (var i = 0; i < a2.length; i++) {
      a1.push(a2[i]);

    }
  for (var i = 0; i < a1.length; i++) {
    for (var j = i + 1; j < a1.length; j++) {
      if (a1[i] === a1[j]) {
        delete a1[j]
      }
    }
  }
  return a1.sort().join('')
}

longest(a, b)
