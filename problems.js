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
