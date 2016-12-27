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

// 6.Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// - each taken only once - coming from s1 or s2.
// *****************************************************************************************************************************************************************
function FirstFactorial(num) {
  // code goes here
  for (var i = num - 1; i > 0; i--) {
      num = num * i
  }
  return num;
}
FirstFactorial(8)
// 7.Using the JavaScript language, have the function LongestWord(sen)
// take the sen parameter being passed and return the largest word in the string. If there are two or
//  more words that are the same length, return the first word from the string with that length. Ignore
//  punctuation and assume sen will not be empty.
// *****************************************************************************************************************************************************************
function LetterChanges(str) {
  var al = "abcdefghijklmnopqrstuvwxyz"
  var a12 = al.split('')
  var array = str.split('')
  // code goes here
    for (var i = 0; i < array.length; i++) {

        if (a12.indexOf(array[i]) == 25) {
          array[i] = a12[0]
        }
        else {
            array[i] = a12[a12.indexOf(array[i]) + 1];
        }

    }
    for (var j = 0; j < array.length; j++) {

      if (array[j] === "a" || array[j] === "u" || array[j] === "o" || array[j] === "i" || array[j] === "e")
        {
            array[j] = array[j].toUpperCase();
        }

    }

    return a12;

}

// keep this function call here

LetterChanges("aeddz");
// 8.Using the JavaScript language, have the function LongestWord(sen)
// take the sen parameter being passed and return the largest word in the string. If there are two or
//  more words that are the same length, return the first word from the string with that length. Ignore
//  punctuation and assume sen will not be empty.
// *****************************************************************************************************************************************************************

var str = "fun&!!$%%^&,. time michaet michael iwenttothesrot ilovehertodeath";

function LongestWord(sen) {
 sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
 sen = sen.split(' ');
 var longest = 0;
 var word = ''
  for (var i = 0; i < sen.length; i++) {
      if (sen[i].length > longest) {
        longest = sen[i].length;
        word = sen[i];

      }
  }
 return word;
}

// keep this function call here
LongestWord(str);

// 9.Using the JavaScript language, have the function LongestWord(sen)
// take the sen parameter being passed and return the largest word in the string. If there are two or
//  more words that are the same length, return the first word from the string with that length. Ignore
//  punctuation and assume sen will not be empty.
// *****************************************************************************************************************************************************************


var board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
             [6, 7, 2, 1, 9, 5, 3, 4, 8],
             [1, 9, 8, 3, 4, 2, 5, 6, 7],
             [8, 5, 9, 7, 6, 1, 4, 2, 3],
             [4, 2, 6, 8, 5, 3, 7, 9, 1],
             [7, 1, 3, 9, 2, 4, 8, 5, 6],
             [9, 6, 1, 5, 3, 7, 2, 8, 4],
             [2, 8, 7, 4, 1, 9, 6, 3, 5],
             [3, 4, 5, 2, 8, 6, 1, 7, 9]];

   function doneOrNot(array){

     for (var i = 0; i < array.length; i++) {
        if (array[i].length !== board.length) {
          return false;
        }
     }
     for (var j = 0; j < array.length; j++) {
        console.log(array[j].sort())

        for (var k = 1; k <= 9; k++) {
            if (array[j][k - 1] !== k) {
               return false;

            }
        }
     }

   }

   doneOrNot(board)





   function squre(num, num2) {
     var array = [];
     var array2;
     array.push(num);
     array.push(num2);

       for (var i = 0; i < array.length; i++) {
          array[i] = array[i] * array[i];
          console.log(array[i]);
          array2.push(array[i]);
        }

       return num

   }

   squre(5, 25);

   function squre(num, num2) {

     num = num * num;
     num2 = num2 * num2;
     console.log(num);
     console.log(num2);

      return num
   }

   squre(5, 25);


// 10.You will be given an array of strings which will include both integers and characters.
// Return an array of length 2 with a[0] representing the mean of the integers to a single decimal place. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

// *****************************************************************************************************************************************************************
var lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];

// [3.6, 'udiwstagwo']

function mean(array){
  var nums = [];
  var letters = [];
  var ans = []

  for (var i = 0; i < array.length; i++) {
      if (isNaN(Number(array[i]))) {
        letters.push(array[i]);
      }
      else {
        nums.push(array[i])
      }

  }
    var total = 0;
// 11.
// Write a function generateIntegers/generate_integers that accepts two arguments m/$m and n/$n and generates an array containing the integers from m to n inclusive.
//
// For example, generateIntegers(2, 5)/generate_integers(2, 5) should return [2, 3, 4, 5].
//
// m/$m and n/$n can be any integers greater than or equal to 0.
//
// n/$n will always be greater than or equal to m/$m.
// *****************************************************************************************************************************************************************
function generateIntegers(m, n) {
  var nums = [];
   if (m >= 0 && n >=0 && n >= m) {
      for (var i = m; i <= n; i++) {
         nums.push(i)
      }
      return nums
  }
}
generateIntegers(5, 10);
// 12.
// Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. You task is to identify them and eliminate!
//
// Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2,3,6,34,7,8,2] answer is 2. If there are no twins in the city - return null.
// *****************************************************************************************************************************************************************
var arr = [2,5,34,1,22,1]

function elimination(array){
//write your code here
  for (var i = 0; i < array.length; i++) {

    for (var j = i + 1; j < array.length; j++) {

      if (array[i] === array[j]) {
        return array[i]
      }
    }
  }
  return null
}
elimination(arr)
// 13.
// Your task is to return how many times a string contains a given character.
//
// The function takes a string(inputS) as a paremeter and a char(charS) which is the character that you will have to find and count.
//
// For example, if you get an input string "Hello world" and the character to find is "o", return 2.
// *****************************************************************************************************************************************************************
function stringCounter(inputS, charS){
  inputs.split('')
}
// 14.
// closures
// *****************************************************************************************************************************************************************

function closure() {
 var num = 0

   function addOne(){
     return num + 1;
   }
 return {
   add: addOne
 }
}
