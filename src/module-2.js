// ========== TASK 1 ==========
// const checkAge = function (age) {
//   return age >= 18 ? 'You are an adult' : 'You are a minor';
// };

// console.log(checkAge(18));
// console.log(checkAge(15));
// console.log(checkAge(28));

// ========== TASK 2 ==========
// const checkPassword = function (password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   return password === ADMIN_PASSWORD
//     ? 'Welcome!'
//     : 'Access denied, wrong password!';
// };

// console.log(checkPassword('jqueryismyjam'));

// ========== TASK 3 ==========
// const checkStorage = function (available, ordered) {
// ========= VAR 1 ==========
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// ========= VAR 2 ==========
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   return ordered > available
//     ? 'Your order is too large, not enough goods in stock!'
//     : 'The order is accepted, our manager will contact you';
// };

// console.log(checkStorage(100, 0));

// ========== TASK 4 ==========
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.table(fruits);

// ========== TASK 5 ==========
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.table(fruits);

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ========== TASK 6 ==========
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits);

// ========== TASK 7 ==========
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// ========== TASK 8 ==========
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// ========== TASK 9 ==========
// const getExtremeElements = function (array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([2, 5, 56, 'number']));
// console.log(getExtremeElements([100, 5, 56, 1000]));

// ========== TASK 10 ==========
// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }

// const string = 'London is the capital of Great Britain';
// console.log(splitMessage(string, ' '));
// console.log(splitMessage('Bond', ''));

// ========== TASK 11 ==========
// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// };
// const inputString =
//   'Dear Helen, i love you best of all and i want married with you';
// const price = 10;
// const totalPrice = calculateEngravingPrice(inputString, price);
// console.log(
//   `Ваш заказ содержит ${
//     inputString.split(' ').length
//   } слов. Стоимость заказа ${totalPrice} кредитов`,
// );

// ========== TASK 12 ==========
// function makeStringFromArray(array, delimeter) {
//   return (string = array.join(delimeter));
// }

// const input1 = ['Mango', 'hurries', 'to', 'the', 'train'];
// const input2 = ['M', 'a', 'n', 'g', 'o'];

// console.log(makeStringFromArray(input1, ' '));
// console.log(makeStringFromArray(input2, ''));

// ========== TASK 13 ==========
// const slugify = function (title) {
//   return title.toLowerCase().split(' ').join('-');
// };

// const inputTitle = 'The basics of building logical relationships';
// console.log(slugify(inputTitle));

// ========== TASK 14 ==========
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// console.log(fruits);

// ========== TASK 15 ==========
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);
// console.log(oldClients);

// ========== TASK 16 ==========
// const makeArray = function (firstArray, secondArray, maxLength) {
//   const totalArray = firstArray.concat(secondArray);

//   if (totalArray.length > maxLength) {
//     return totalArray.slice(0, maxLength);
//   }

//   return totalArray;
// };

// const arr1 = ['Mango', 'Poly'];
// const arr2 = ['Ajax', 'Chelsea'];
// const length = 3;

// console.log(makeArray(arr1, arr2, length));

// ========== TASK 17 ==========
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ========== TASK 18 ==========
// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(calculateTotal(24)); //300

// ========== TASK 19 ==========
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];

//   console.log(fruit);
// }

// ========== TASK 20 ==========
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// const arr = [10, 5, 5, 5]; //25

// console.log(calculateTotalPrice(arr));

// ========== TASK 21 !!!!!!!!!!! ==========
// function findLongestWord(string) {
//   const wordArr = string.split(' ');
//   let maxWordLength = wordArr[0].length;
//   let lengestWord = '';

// ================ VAR 1 ==================
//   for (const word of wordArr) {
//     if (word.length >= maxWordLength) {
//       maxWordLength = word.length;
//       lengestWord = word;
//     }
//   }

// ================ VAR 2 ==================
//   for (let i = 0; i < wordArr.length; i += 1) {
//     if (wordArr[i].length >= maxWordLength) {
//       maxWordLength = wordArr[i].length;
//       lengestWord = wordArr[i];
//     }
//   }

//   return lengestWord;
// }

// const inputStr1 = 'The quick brown fox jumped over the lazy dog';
// const inputStr2 = 'May the force be with you';
// const inputStr3 = 'Google do a roll';

// console.log(findLongestWord(inputStr1));
// console.log(findLongestWord(inputStr2));
// console.log(findLongestWord(inputStr3));

// ========== TASK 22 ==========
// const createArrayOfNumbers = function (min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// };

// const rez1 = createArrayOfNumbers(1, 3);
// const rez2 = createArrayOfNumbers(14, 17);

// console.log(rez1);
// console.log(rez2);

// ========== TASK 23 ==========
// const filterArray = function (numbers, value) {
//   let rezArr = [];

//   for (const number of numbers) {
//     if (number > value) {
//       rezArr.push(number);
//     }
//   }

//   return rezArr;
// };

// const input1 = filterArray([1, 2, 3, 4, 5], 3);
// const input2 = filterArray([1, 2, 3, 4, 5], 5);
// const input3 = filterArray([12, 24, 8, 41, 76], 20);

// console.log(input1);
// console.log(input2);
// console.log(input3);

// ========== TASK 24 ==========

// ========== TASK 25 ==========

// ========== TASK 26 ==========

// ========== TASK 27 ==========

// ========== TASK 28 ==========

// ========== TASK 29 ==========

// ========== TASK 30 ==========

// ========== TASK 32 ==========
