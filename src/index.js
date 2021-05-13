// ========== MODULE 1 ==========
'use strict'

// ========== TASK 1 ==========
// const productName = 'Droid';
// console.log(productName);
// const pricePerItem = 2000;
// console.log(pricePerItem);

// ========== TASK 2 ==========
// let productName = 'Droid';
// productName = 'Repair droid';
// console.log(productName);
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);

// ========== TASK 3 ==========
// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// let isOnline = true;
// let isAdmin = false;
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// ========== TASK 4 ==========
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log('Total price', totalPrice, 'credits');

// ========== TASK 5 ==========
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// ========== TASK 6 ==========
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// ========== TASK 7 ==========
// function sayHi() {
//     console.log('Hello, this is my first function!');
// }
// sayHi();

// ========== TASK 8 ==========
// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ========== TASK 9 ==========
// function add(a, b, c) {
//     return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ========== TASK 10 ==========
// function makeMessage (name, price) {
//     const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
// };
// console.log(makeMessage('Droid', 1200));

// ========== TASK 11 ==========
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
// };
// console.log('Total price', calculateTotalPrice(2, 100));

// ========== TASK 12 ==========
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     return message;
// }
// console.log(makeOrderMessage(2, 100, 80));

// ========== TASK 13 ==========
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// console.log('Is adult', isAdult(19));

// ========== TASK 14 ==========
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = (password === SAVED_PASSWORD);
//   return isMatch;
// }
// console.log('Match of password', isValidPassword('jqueryismyjam'));

// ========== TASK 15 ==========
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(18));

// ========== TASK 16 ==========
// function checkStorage(available, ordered) {
//   let message;
//     if (ordered > available) {
//         message = 'Not enough goods in stock!'
//     } else {
//         message = 'Order is processed, our manager will contact you.'
//     }
//   return message;
// }
// console.log(checkStorage(10, 15));

// ========== TASK 17 ==========
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ========== TASK 18 ==========
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//     let totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = 'Insufficient funds!'
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }
//   return message;
// }
// console.log(makeTransaction(100, 5, 600));

// ========== TASK 19 ==========
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) {
//       message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//       message = 'Welcome!';
//   } else {
//       message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));

// ========== TASK 20 ==========
// function checkStorage(available, ordered) {
//   let message;
//     if (ordered === 0) {
//         message = 'There are no products in the order!';
//     } else if (ordered > available) {
//         message = 'Your order is too large, there are not enough items in stock!';
//     } else {
//         message = 'The order is accepted, our manager will contact you';
//     }
//   return message;
// }
// console.log(checkStorage(100, 200));

// ========== TASK 21 ==========
// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     return isInRange;
// }
// console.log(isNumberInRange(0, 10, 0));

// ========== TASK 22 ==========
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType ==='vip' || subType === 'pro');
//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('vip'));

// ========== TASK 23 ==========
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange;
//     return isNotInRange;
// }
// console.log(isNumberNotInRange(0, 10, 5));

// ========== TASK 24 ==========
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     let message;
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//             } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//             } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//             } else {
//         discount = BASE_DISCOUNT;
//             }
//     console.log(message = `Your discount is ${discount * 100}%`)
//     return discount;
    
// }
// getDiscount(10000);

// ========== TASK 25 (Тернарный оператор) ==========
// function checkStorage(available, ordered) {
//     let message;
//     message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
//     console.log(message)
//     return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 250);

// ========== TASK 26 (Тернарный оператор) ==========

