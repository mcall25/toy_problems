// 3. Write a function that takes in a phone number and formats the number to the correct format
// *****************************************************************************************************************************************************************
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}

createPhoneNumber([20])
// 4. Write a function that takes in a number and return true if the number is prime otherwise false
// *****************************************************************************************************************************************************************
function isPrime(num) {
  var prime = true;
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      prime = false;
    }
  }
  return (num < 2) ? false : prime;
}
// 5. Write a function that takes in a number and return true if the number is prime otherwise false
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript
// *****************************************************************************************************************************************************************
function isPrime(num) {
  var prime = true;
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      prime = false;
    }
  }
  return (num < 2) ? false : prime;
}
