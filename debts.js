// ============== VAR 1 ===================
// const welcomeMessage = confirm(`Привет! Приступить к расчету?`);

// let inputName;

// if (welcomeMessage === true) {
//   //   inputMembersName(prompt('Введите имена участников через пробел'));
//   inputName = prompt('Введите имена участников через пробел');
// } else {
//   console.log('Завершено пользователем');
// }

// function membersName(inputName) {
//   let arr;
//   if (inputName === null) {
//     console.log('Ввод имен отменен пользователем');
//   }

//   arr = inputName.split(' ');

//   for (const item of arr) {
//     if (item === '') {
//       const inputError = prompt(
//         'Ошибка ввода! Введите имена участников через пробел',
//       );
//       arr = inputError.split(' ');
//     }
//     // console.log(`Участники мероприятия: ${arr}`);
//     // console.log(typeof arr);
//   }

//   return arr;
// }

// console.log(membersName(inputName));

// ============== VAR 2 ===================
const membersName = 'Lena Sasha Ann Andrew Vlad';

const membersArr = membersName.split(' ');
const membersAmount = membersArr.length;

console.log(`Участники мероприятия: ${membersArr.join(', ')}.`);
console.log(`Количество участников: ${membersAmount} человек.`);

const membersCost = function (membersArr) {
  let costArr = [];
  for (let i = 0; i < membersArr.length; i += 1) {
    if (i < 0) {
      const inputCostMessage = prompt(
        `Введите затраты участника по имени ${membersArr[i]}`,
      );

      costArr.push(Number(inputCostMessage));
    }
    // console.log(
    //   `Затраты учатника: ${membersArr[i]} = ${costArr.push(
    //     Number(inputCostMessage),
    //   )} грн.`,
    // );
  }

  return costArr;
};

console.log(membersCost(membersArr));
// const totalCost =
// const a = membersCost(membersArr)[1];
console.log(a);
