// ========== TASK 1 ==========
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// console.log(child);
// console.log('Фамилия ребенка -', child.surname);
// console.log('Наследственность ребенка -', child.heritage);

// console.log(
//   'Свойство surname собственное для объекта child -',
//   child.hasOwnProperty('surname'),
// );
// console.log(
//   'Свойство name собственное для объекта child -',
//   child.hasOwnProperty('name'),
// );

// console.log(
//   'Объект parent является прототипом для объекта child -',
//   parent.isPrototypeOf(child),
// );

// console.log(child.education);
// console.log(child.__proto__);
// console.log(parent.__proto__);

// ========== TASK 2 ==========
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child);
// console.log(ancestor.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));

// ========== TASK 3 ==========
// const Car = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const myCar = new Car('VAZ', '21099', 3000);
// console.log(myCar);
// console.log(
//   `Цена автомобиля ${myCar.brand} ${myCar.model} - ${myCar.price} $.`,
// );

// ========== TASK 4 ==========
// function Car({ brand = 'No model', model = 'No brand', price = 0 } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const andrewCar = new Car({ brand: 'Hunday', model: 'Getz', price: '5700' });
// console.log(andrewCar);
// const andrewCar1 = new Car({ model: 'Getz' });
// console.log(andrewCar1);
// const andrewCar2 = new Car();
// console.log(andrewCar2);

// ========== TASK 5 ==========
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   return (this.price = newPrice);
// };

// const someCar = new Car({ brand: 'GAZ', model: '21', price: 3500 });

// console.log(someCar);
// console.log('Стоимость автомобиля:', someCar.getPrice());
// const priceAfterChange = someCar.changePrice(3100);
// console.log('Новая стоимость автомобиля:', priceAfterChange);

// ========== TASK 6 ==========
const Storage = function (items = []) {
  this.items = items;
};

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};

Storage.prototype.removeItem = function (item) {
  if (this.items.includes(item)) {
    return this.items.splice(this.items.indexOf(item), 1);
  }
};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ========== TASK 7 ==========

// ========== TASK 8 ==========

// ========== TASK 9 ==========

// ========== TASK 10 ==========

// ========== TASK 11 ==========

// ========== TASK 12 ==========

// ========== TASK 13 ==========

// ========== TASK 14 ==========

// ========== TASK 15 ==========

// ========== TASK 16 ==========

// ========== TASK 17 ==========

// ========== TASK 18 ==========

// ========== TASK 19 ==========
