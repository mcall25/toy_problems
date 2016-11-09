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
