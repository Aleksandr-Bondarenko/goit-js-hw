// ========== ITERATING OVER ARRAY METHODS ==========

// ========== TASK 1 (FOREACH) ==========
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(orderedItem => {
//     totalPrice += orderedItem;
//   });
//   return totalPrice;
// }

// const arr1 = [1, 1, 1, 1, 1];
// const arr2 = [1, 10, 23, -1, 0];

// console.log('Сумма arr1:', calculateTotalPrice(arr1));
// console.log('Сумма arr2:', calculateTotalPrice(arr2));

// ========== TASK 2 (FOREACH) ==========
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// ========== TASK 3 (FOREACH) ==========
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(arrItem => {
//     if (secondArray.includes(arrItem)) {
//       commonElements.push(arrItem);
//     }
//   });

//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ========== TASK 4 (ARROW-FUNCTION) ==========
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));

// ========== TASK 5 (ARROW-FUNCTION) ==========
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(8, 60));

// ========== TASK 6 (FOREACH) ==========
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };

// console.log(calculateTotalPrice([164, 48, 291]));

// ========== TASK 7 (FOREACH) ==========
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([12, 24, 8, 41, 76], 38));

// ========== TASK 8 (FOREACH) ==========
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// ========== TASK 9 (FOREACH) ==========
// function changeEven(numbers, value) {
//   const newNumbers = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newNumbers.push((number += value));
//     } else {
//       newNumbers.push(number);
//     }
//   });

//   return newNumbers;
// }

// const inputArr1 = [1, 2, 3, 4, 5];
// const inputArr2 = [17, 24, 68, 31, 42];

// console.log(changeEven(inputArr1, 10));
// console.log(changeEven(inputArr2, 100));
// console.log('Исходный массив 1 не изменился:', inputArr1);
// console.log('Исходный массив 2 не изменился:', inputArr2);

// ========== TASK 10 (MAP) ==========
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets);
// console.log(planetsLengths);

// ========== TASK 11 (MAP) ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log(titles);

// ========== TASK 12 (FLATMAP) ==========
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// ========== TASK 13 (MAP) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//   },
// ];

// const getUserNames = users => {
//   return users.map(user => user.name);
// };

// console.log(getUserNames(users));

// ========== TASK 14 (FILTER) ==========
// const getUserEmails = users => users.map(user => user.email);
// console.log(getUserEmails(users));

// ========== TASK 15 ==========
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log('Исходный массив:', numbers);
// console.log('Массив четных чисел:', evenNumbers);
// console.log('Массив НЕчетных чисел:', oddNumbers);

// ========== TASK 16 (FLATMAP+FILTER) ==========
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, arr) => arr.indexOf(genres) === index,
// );

// console.log(uniqueGenres);

// ========== TASK 17 (FILTER) ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log('Рейтинговые книги:', topRatedBooks);
// console.log(booksByAuthor);

// ========== TASK 18 (FILTER) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'red'));

// ========== TASK 19 (FILTER) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     age: 23,
//   },
//   {
//     name: 'Sharlene Bush',
//     age: 45,
//   },
//   {
//     name: 'Ross Vazquez',
//     age: 67,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age >= minAge && age <= maxAge);
// };
// console.log(getUsersWithAge(users, 10, 20));
// console.log(getUsersWithAge(users, 10, 50));
// console.log(getUsersWithAge(users, 30, 50));

// ========== TASK 20 (FILTER) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
// ];

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Alex Bond'));

// ========== TASK 21 (FILTER) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace', 'Naomi Buckner'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
// ];

// const getFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index);
// };

// console.log(getFriends(users));

// ========== TASK 22 (FILTER) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     isActive: true,
//   },
//   {
//     name: 'Sharlene Bush',
//     isActive: false,
//   },
//   {
//     name: 'Ross Vazquez',
//     isActive: true,
//   },
// ];

// const getActiveUsers = users => {
//   return users.filter(user => user.isActive === true);
// };

// console.log(getActiveUsers(users));

// ========== TASK 23 (FILTER) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     isActive: true,
//   },
//   {
//     name: 'Sharlene Bush',
//     isActive: false,
//   },
//   {
//     name: 'Ross Vazquez',
//     isActive: true,
//   },
// ];

// const getInactiveUsers = users => {
//   return users.filter(user => user.isActive !== true);
// };

// console.log(getInactiveUsers(users));

// ========== TASK 24 (FIND) ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ========== TASK 25 (FIND) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//   },
// ];

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'moorehensley@indexia.com'));
// console.log(getUserWithEmail(users, 'abcdefg@indexia.com'));

// ========== TASK 26 (EVERY) ==========
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

// console.log('Is every number of first array even:', eachElementInFirstIsEven);
// console.log('Is every number of first array uneven:', eachElementInFirstIsOdd);

// console.log('Is every number of second array even:', eachElementInSecondIsEven);
// console.log(
//   'Is every number of second array uneven:',
//   eachElementInSecondIsOdd,
// );

// console.log('Is every number of third array even:', eachElementInThirdIsEven);
// console.log('Is every number of third array uneven:', eachElementInThirdIsOdd);

// ========== TASK 27 (EVERY) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     isActive: false,
//   },
//   {
//     name: 'Sharlene Bush',
//     isActive: true,
//   },
//   {
//     name: 'Ross Vazquez',
//     isActive: false,
//   },
//   {
//     name: 'Elma Head',
//     isActive: true,
//   },
// ];

// const isEveryUserActive = users => {
//   return users.every(user => user.isActive === true);
// };

// console.log(isEveryUserActive(users));

// ========== TASK 28 (SOME) ==========
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

// console.log('Is any number of first array even:', anyElementInFirstIsEven);
// console.log('Is any number of first array uneven:', anyElementInFirstIsOdd);

// console.log('Is any number of second array even:', anyElementInSecondIsEven);
// console.log('Is any number of second array uneven:', anyElementInSecondIsOdd);

// console.log('Is any number of third array even:', anyElementInThirdIsEven);
// console.log('Is any number of third array uneven:', anyElementInThirdIsOdd);

// ========== TASK 29 (SOME) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     isActive: false,
//   },
//   {
//     name: 'Sharlene Bush',
//     isActive: true,
//   },
//   {
//     name: 'Ross Vazquez',
//     isActive: false,
//   },
//   {
//     name: 'Elma Head',
//     isActive: true,
//   },
// ];
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive === true);
// };

// console.log('Is some user is active:', isAnyUserActive(users));

// ========== TASK 30 (REDUCE) ==========
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players);

// const totalPlayTime = playtimes.reduce((acc, time) => acc + time);

// console.log('Total time of play:', totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log('Average time of play:', averagePlayTime);

// ========== TASK 31 (REDUCE) ==========
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, { playtime, gamesPlayed }) => {
//     return acc + playtime / gamesPlayed;
//   },
//   0,
// );

// console.log(
//   'Total average time of play all players:',
//   totalAveragePlaytimePerGame,
// );

// ========== TASK 32 (REDUCE) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     balance: 2800,
//   },
//   {
//     name: 'Sharlene Bush',
//     balance: 3500,
//   },
//   {
//     name: 'Ross Vazquez',
//     balance: 4500,
//   },
//   {
//     name: 'Elma Head',
//     balance: 1800,
//   },
// ];

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// };

// console.log('Total balance of users:', calculateTotalBalance(users));

// ========== TASK 33 (REDUCE) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
// ];

// const getTotalFriendCount = users => {
//   return users.reduce((acc, user) => {
//     return acc + user.friends.length;
//   }, 0);
// };

// console.log('Total count of all users friends:', getTotalFriendCount(users));

// ========== TASK 34 (SORT) ==========
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// console.log(releaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);
// console.log(authors);

// ========== TASK 35 (SORT_NUMBER) ==========
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);

// const descendingReleaseDatesVar = [...releaseDates].sort().reverse();
// console.log(descendingReleaseDatesVar);

// ========== TASK 36 (SORT_STRING) ==========
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт',
// ];

// const authorsInAlphabetOrder = [...authors].sort();
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// ========== TASK 37 (SORT_ARRAY_OF_OBJECT) ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((previousBook, followingBook) =>
//   previousBook.author.localeCompare(followingBook.author),
// );
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author),
// );
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

// ========== TASK 38 (SORT) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     balance: 2800,
//   },
//   {
//     name: 'Sharlene Bush',
//     balance: 3500,
//   },
//   {
//     name: 'Ross Vazquez',
//     balance: 4500,
//   },
//   {
//     name: 'Elma Head',
//     balance: 1800,
//   },
// ];

// const sortByAscendingBalance = users => {
//   return [...users].sort(
//     (firstUser, secondUser) => firstUser.balance - secondUser.balance,
//   );
// };

// console.log(sortByAscendingBalance(users));

// ========== TASK 39 (SORT) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
// ];

// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length,
//   );
// };

// console.log(sortByDescendingFriendCount(users));

// ========== TASK 40 (SORT) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
// ];

// const sortByName = users => {
//   return [...users].sort((firstUser, secondUser) =>
//     firstUser.name.localeCompare(secondUser.name),
//   );
// };

// console.log(sortByName(users));

// ========== TASK 41 (CHAINING_CALL_OF_METHODS) ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.log(names);
// console.log(books);

// ========== TASK 42 (CHAINING_CALL_OF_METHODS) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
// ];

// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length,
//     )
//     .map(user => user.name);
// };

// console.log(getNamesSortedByFriendCount(users));

// ========== TASK 43 (CHAINING_CALL_OF_METHODS) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace', 'Padilla Garrison'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace', 'Naomi Buckner'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//       'Sharron Pace',
//     ],
//   },
// ];

// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index)
//     .sort((firstFriend, secondFriend) =>
//       firstFriend.localeCompare(secondFriend),
//     );
// };

// console.log(getSortedFriends(users));

// ========== TASK 44 (CHAINING_CALL_OF_METHODS) ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     balance: 2278,
//     gender: 'female',
//   },
// ];

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => {
//       return acc + user.balance;
//     }, 0);
// };

// console.log(
//   'Total balance of FEMALE gender:',
//   getTotalBalanceByGender(users, 'female'),
// );
// console.log(
//   'Total balance of MALE gender:',
//   getTotalBalanceByGender(users, 'male'),
// );
