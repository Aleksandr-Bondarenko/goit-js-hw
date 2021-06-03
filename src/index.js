//========== TASK 1 ==========
// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

//========== TASK 2 ==========
// const deliverPizza = function (pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// };

// const makePizza = function (pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// };

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Barbequ', makePizza));
// console.log(makeMessage('Barbequ', deliverPizza));

//========== TASK 3 ==========
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`);
// });

//========== TASK 4 ==========
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }

//     return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// const rez1 = pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// const rez2 = pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// const rez3 = pizzaPalace.order('Биг майк', makePizza, onOrderError);
// const rez4 = pizzaPalace.order('Венская', makePizza, onOrderError);

// console.log('Ассортимент:', pizzaPalace.pizzas);
// console.log(rez1);
// console.log(rez2);
// console.log(rez3);
// console.log(rez4);

//========== TASK 5 ==========
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
// };

// console.log(pizzaPalace.order('Ультрасыр'));
// console.log(pizzaPalace.order('Барбекю'));

//========== TASK 6 ==========
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],

//   getBalance() {
//     return this.balance;
//   },

//   getDiscount() {
//     return this.discount;
//   },

//   setDiscount(value) {
//     this.discount = value;
//   },

//   getOrders() {
//     return this.orders;
//   },

//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

//========== TASK 7 ==========
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i + 1));
// }

// console.log(messages);

//========== TASK 8 ==========
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// console.log(messages);

//========== TASK 9 ==========
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// console.log(pizzaPalaceMessage);
// console.log(burgerShackMessage);

//========== TASK 10 ==========
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter(e => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction.bind(
  service,
  'kiwi@mail.uk',
  service.subscribe.bind(service, 'kiwi@mail.uk'),
);

console.log(firstInvoke());
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction.bind(
  service,
  'poly@hotmail.de',
  service.unsubscribe.bind(service, 'poly@hotmail.de'),
);
console.log(secondInvoke());
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
