'use strict'

/* На складі комп'ютерних запчастин Mate warehouse є коробки з різними видами запчастин. У кожній коробці лежить деталь, відповідно до назви коробки. 
Наприклад в коробці memory лежить оперативна пам'ять, в коробці processors лежать процесори і так далі. Комірникові потрібно знати де що зберігається.

Створи об'єкт warehouse, в якому будуть властивості (коробки), що відповідають трьом типам деталей ( memory, processors, displays). 
Зараз у нас на складі 10 процесорів, 20 дисплеїв і 15 планок оперативної */

let warehouse = {
    processors: 10,
    displays: 20, 
    memory: 15
  };

 /* База даних зберігає користувачів у форматі:

  {
    firstName: 'Ivan',
    lastName: 'Vasylchenko',
  }
  
  Було б зручно додати поле fullName в кожен об'єкт.
  
  Створи функцію addFullName, яка приймає об'єкт user і додає до нього властивість fullName зі значенням - ім'ям та прізвищем, поєднаними одним пробілом.
  
  Повертати з функції нічого не потрібно! */

  function addFullName(user) {
    user.fullName = `${user.firstName} ${user.lastName}`;
   }

/* У нас більше немає потреби зберігати дані про вік наших користувачів, тому ми вирішили видалити вік з бази у два етапи.

Потрібно видалити поле age з бази даних people в усіх, в кого gender дорівнює female. Повертати з функції нічого не потрібно. */

function removeFemaleAges(people) {
    for (let person of people) {
      if (person.gender === 'female') {
        delete person.age;
      }
    }
  }
  
  
 /* Час оновлювати програмне забезпечення! Інженери випустили оновлення для застарілих версій роботів. Потрібно вишикувати всіх роботів і перевірити у кого з них застаріле ПЗ.

  Функція getOutdated приймає масив роботів robots і повертає масив індексів тих роботів, у яких coreVersion менший за newVersion.*/

  function getOutdated(robots, newVersion) {
    let robotInspection = [];
   
     for (let i = 0; i < robots.length; i++) {
       if (robots[i].coreVersion < newVersion) {
         robotInspection.push(i);
       }
     }
     return robotInspection;
   }

/* В базі даних користувачів стався збій. 
В декого зникли значення з поля firstName, добре що у user вже є поле fullName, з якого ми можемо взяти потрібні дані.

Реалізуй функцію restoreNames, яка приймає масив об'єктів users та відновлює firstName в тих, 
в кого воно відсутнє або рівне undefined, спираючись на поле fullName.
Функція нічого не повертає. */

function restoreNames(users) {
    for (const user of users) {
      if (user.firstName) {
        continue;
      }
  
      const parts = user.fullName.split(' ');
  
      user.firstName = parts[0];
    }
  }


