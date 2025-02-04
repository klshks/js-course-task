'use strict' 

/* Mate Robot Factory вже випустила не одну сотню роботів різних конфігурацій, розмірів та видів. Інформація про кожного робота зберігається у вигляді об'єкта з його характеристиками.

Давай напишемо функцію compareRobots, яка приймає двох роботів та повертає true, тільки якщо всі характеристики обох роботів збігаються (порядок властивостей не важливий, лише ключі та значення).

Примітки:

у кожного робота є унікальний серійний номер (не враховуємо під час порівняння)
властивості роботів не можуть мати значення undefined і NaN */

const compareRobots = (robot1, robot2) => {
    if (Object.keys(robot1).length !== Object.keys(robot2).length) {
      return false;
    }
  
    for (const key in robot1) {
      if (key === 'serialNo') {
        continue
      }
  
      if (!robot2.hasOwnProperty(key) || robot1[key] !== robot2[key]) {
        return false
      }
    }
  
    return true;
  };

  /*На складах порядок. Роботи стоять без роботи. Проведемо інвентаризацію?

  На кожній коробці є 1 символ, що позначає її тип. Потрібно навчити роботів і рахувати їх.
  
  Створи функцію countBoxes, яка приймає рядок boxes, де кожен символ - це тип однієї з коробок на складі. Порахуй, скільки коробок кожного типу є на складі та поверни об'єкт зі звітом.
*/

function countBoxes(boxes) {
    const boxesCount = {};
  
    for (const box of boxes) {
      if (!boxesCount[box]) {
        boxesCount[box] = 0;
      }
  
      boxesCount[box]++;
    }
  
    return boxesCount;
  };
  