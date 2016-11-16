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
