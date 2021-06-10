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
// function Storage(items = []) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   return this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   if (this.items.includes(item)) {
//     return this.items.splice(this.items.indexOf(item), 1);
//   }
// };

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage);

// console.log(storage.getItems());

// storage.addItem('Дроид');
// console.log(storage.getItems());

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());

// ========== TASK 7 ==========
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//   return (this.value = str + this.value);
// };

// StringBuilder.prototype.padEnd = function (str) {
//   return (this.value = this.value + str);
// };

// StringBuilder.prototype.padBoth = function (str) {
//   return (this.value = str + this.value + str);
// };

// const builder = new StringBuilder('.');

// console.log(builder.getValue());

// builder.padStart('^');
// console.log(builder.getValue());
// builder.padEnd('^');
// console.log(builder.getValue());
// builder.padBoth('=');
// console.log(builder.getValue());

// ========== TASK 8 ==========
// class Car {}

// const someCar = new Car();

// console.log(typeof Car);
// console.log(Car.prototype);
// console.log(someCar);

// ========== TASK 9 ==========
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const someCar = new Car({ brand: 'VAZ', model: 21099, price: 3000 });
// console.log(someCar);

// ========== TASK 10 ==========
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }

// const myCar = new Car({ brand: 'VAZ', model: 21099, price: 3000 });
// console.log(myCar);

// console.log('Стоимость авто:', myCar.getPrice());
// myCar.changePrice(2700);
// console.log('Новая стоимость авто:', myCar.getPrice());

// ========== TASK 11 ==========
// class Car {
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }

// const myCar = new Car({ brand: 'VAZ', model: 21099, price: 3000 });
// console.log(myCar);

// console.log('Попытка прочитать приватное свойство brand:', myCar.brand);
// console.log(
//   'Чтение приватного свойства через метод getBrand:',
//   myCar.getBrand(),
// );

// myCar.changeBrand('Lanos');
// console.log(myCar);

// ========== TASK 12 ==========
// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems());
// storage.addItem('Дроид');
// console.log(storage.getItems());
// storage.removeItem('Пролонгер');
// console.log(storage.getItems());

// console.log(storage);

// ========== TASK 13 ==========
// class StringBuilder {
//   #value;

//   constructor(baseValue) {
//     this.#value = baseValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padStart(str) {
//     return (this.#value = str + this.#value);
//   }

//   padEnd(str) {
//     return (this.#value += str);
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue());
// builder.padStart('^');
// console.log(builder.getValue());
// builder.padEnd('^');
// console.log(builder.getValue());
// builder.padBoth('=');
// console.log(builder.getValue());

// ========== TASK 14 ==========
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   get model() {
//     return this.#model;
//   }

//   get price() {
//     return this.#price;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// const someCar = new Car({ brand: 'Audi', model: 'Q7', price: 12000 });
// console.log(someCar);

// console.log(someCar.brand);
// console.log(someCar.model);
// console.log(someCar.price);

// someCar.brand = 'VAZ';
// someCar.model = '21099';
// someCar.price = 3000;

// console.log(someCar);

// console.log(someCar.brand);
// console.log(someCar.model);
// console.log(someCar.price);

// ========== TASK 15 ==========
// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }

//     this.#price;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price);

// audi.price = 49000;
// console.log(audi.price);

// audi.price = 51000;
// console.log(audi.price);

// console.log(audi);

// ========== TASK 16 ==========
// class Car {
//   static #MAX_PRICE = 50000;

//   static checkPrice(price) {
//     if (price <= this.#MAX_PRICE) {
//       return 'Всё хорошо, цена в порядке.';
//     } else {
//       return 'Внимание! Цена превышает допустимую.';
//     }
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));

// ========== TASK 17 ==========
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

// console.log(Admin.AccessLevel);

// ========== TASK 18 ==========
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

// ========== TASK 19 ==========
