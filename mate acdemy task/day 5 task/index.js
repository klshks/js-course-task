'use strict'
/* Створи функцію multiply.
Передай у функцію параметри a та b.
Поверни із функції добуток її параметрів.
Якщо параметр b не передано у функцію, використовуй 1, як значення за замовчуванням. */

function multiply (a, b = 1) {
    return a * b;
}

/* Оголоси функцію-стрілку getString, яка не приймає ніяких параметрів.

Всередині функції getString:

оголоси змінну jobTitle і присвой їй значення - рядок 'I am a programmer'.
поверни змінну jobTitle за допомогою ключового слова return.
Примітка: не використовуй ключове слово function у цьому завданні. */

let getString = () => {
    let jobTitle = 'I am a programmer';
  
    return jobTitle;
  }

/* Створи функцію-стрілку greeter, яка приймає рядок name та повертає рядок-привітання такого формату: Hi, ${name}!.

Не використовуй ключове слово return. */

let greeter = name => `Hi, ${name}!`;

/*Іспанський сором... Оце тут наробили справ. Не в службу, а в дружбу, допоможи це переписати на switch case, тобі практика, а нам чистий код.*/

function getTask(weekday) {
    switch (weekday) {
      case 'monday':
      return 'Write a new module for the program';
  
      case'tuesday':
      return 'Test the module and find bugs';
  
      case 'wednesday':
      return 'Write a new module for the program';
  
      case'thursday':
      return 'Test the module and find bugs';
  
      case'friday':
      return 'You need to meet the boss today';
  
      case'saturday':
      return 'Spend the evening with your friends';
  
      case 'sunday':
      return 'Go to the movies in the evening';
  
      default:
      return 'Entered the wrong day of the week';
    }
  }

/* В Mate academy ми навчаємо не тільки людей, а й роботів. На жаль, з ними якось складніше, але вже як є.

Наш робот приймає команду у свій термінал у вигляді рядка back, forward, left, right, stop. Далі своїми кібермізками він блискавично конвертує значення в x та y і посилає імпульс з координатами у свої робокінцівки у вигляді рядка hor=x ver=y.

Напиши функцію getDirection, яка приймає рядок direction з напрямком руху і повертає рядок у форматі hor=x ver=y.

Є такі команди:

forward - це сигнал 0 для x та 1 для y
back - це сигнал 0 для x та -1 для y
right - це сигнал 1 для x та 0 для y
left - це сигнал -1 для x та 0 для y
stop - це сигнал 0 для x та 0 для y
Якщо ж команда не знайома роботу, то x і y дорівнюватимуть 0.

А, і ще... Наш робот ще не проходив наші уроки по conditional operators, тому доведеться використовувати switch case.

Наприклад:

Для команди 'forward' роботу необхідні координати у форматі hor=0 ver=1
А команду 'turn around' він не знає, тому координати будуть hor=0 ver=0 */

function getDirection (direction) {

    switch (direction) {
      case 'forward':
      return 'hor=0 ver=1'
  
      case 'back':
      return 'hor=0 ver=-1'
  
      case 'right':
      return 'hor=1 ver=0'
  
      case 'left':
      return 'hor=-1 ver=0'
  
      case 'stop':
      return 'hor=0 ver=0'
  
      default: 
      return 'hor=0 ver=0'
    }
  }

/* Вам потрібно створити функцію findCalculationType, яка отримує 3 аргументи: 2 числа та результат невідомої операції, виконаної над ними (також число).

На основі цих 3 значень потрібно повернути рядок, який описує, яка операція була використана для отримання даного результату.

Приклади результату функції: addition, subtraction, multiplication, division. */

function findCalculationType(a, b, res) {
    switch (res) {
  
      case a + b:
      return 'addition';
  
      case a - b:
      return 'subtraction';
  
      case a * b:
      return 'multiplication';
  
      case a / b:
      return 'division';
    }
  }

  /*Наш електронний Mate telegraph відправляє повідомлення, використовуючи цифри 0 і 1.

  Реалізуй функцію decodeSignal, яка приймає будь-яке повідомлення input і повертає 1, якщо воно truthy і 0, якщо falsy.*/

  function decodeSignal (input) {
    if (input) {
        return 1;
    } else {
        return 0;
    }
  }
  
/*  На районній олімпіаді з інформатики, в розпал подій трапився казус. Сервер для визначення переможця серед двох фіналістів Максима і Романа зламався.

Він мав повертати кількість задач яку розв'язав Максим та Роман у нашу функцію, яка вміє працювати тільки з числами. Та щось пішло не так, і сервер почав повертати як рядки так і числа. У результаті вхідні дані могли виглядати непередбачувано.

Олімпіада на межі зриву. Давай швидко виправимо ситуацію і допоможемо організаторам новою функцією getWinner, яка першим параметром приймає кількість задач, які розв'язав Максим maxSolved, а другою — кількість, яку розв'язав Роман romanSolved. Вхідні параметри можуть бути як рядками, так і числами.

Результатом функції буде рядок:

Max is the winner!!! - якщо Максим розв'язав більшу кількість задач;
Roman is the winner!!! - якщо Роман розв'язав більшу кількість задач;
Roman and Maxim are the winners!!! - якщо хлопці розв'язали однакову кількість задач. */

function getWinner (maxSolved, romanSolved) {
    let num1 = +maxSolved;
    let num2 = +romanSolved;
  
    if (num1 > num2) {
      return 'Max is the winner!!!';
    } else if (num1 < num2) {
      return 'Roman is the winner!!!';
    } else {
      return 'Roman and Maxim are the winners!!!';
    }
  }

  /* Власникам Grand Mate Hotel подобаються роботи наших студентів. У них є ще кілька замовлень для нас.

  Напиши функцію-валідатор бронювань canTheyBook, яка приймає кількість дорослих adultsCount і дітей childrenCount та повертає true, якщо виконуються всі умови:
  
  номер вміщує не більше 8 персон
  має бути хоча б один дорослий
  на одного дорослого може бути не більше двох дітей
  Вважай непередані аргументи рівними 0.
  
  Приклади:
  
  canTheyBook(0, 2) === false - 0 дорослих, 2 дитини. Порушення правил готелю.
  canTheyBook(2, 4) === true - 2 дорослих, 4 дитини. Бронювання дозволено.
  canTheyBook(2) === true - 2 дорослих. Бронювання дозволено.
  canTheyBook(9) === false - 9 дорослих. Перевищено кількість осіб для однієї кімнати. */

  function canTheyBook(adultsCount = 0, childrenCount = 0) {

    if (adultsCount >= 1  && 
        adultsCount + childrenCount <= 8 &&
        childrenCount <= 2 * adultsCount) {
          return true;
        }
  
    return false;
  }

/* Справи готелю пішли на краще. У Mate Grand Hotel більше не повторюються випадки, коли банда з 20 дітей забронювала 8-місний номер.

Власники знову звернулися до нас. У них є нова послуга: Екстра-ліжко для малюка до 2-х років. Тепер номер вміщує до 8 дорослих + 1 малюк.

Потрібно оновити функцію canTheyBook так, щоб вона приймала третій аргумент babiesCount та трохи змінити умови:

номер вміщує не більше 8 персон, але 9-м можна підселити малюка;
має бути мінімум один дорослий;
на одного дорослого може бути не більше 2-ох дітей АБО однієї дитини та одного малюка;
малюків можна розмістити на ліжках для дорослих, тому в номері може бути більше ніж один малюк (якщо виконуються інші умови).*/

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    if (adultsCount < 1) {
          return false;
      }
  
      if (adultsCount + childrenCount > 8 || 
          (adultsCount + childrenCount + babiesCount) > 9) {
          return false;
      }
  
      if (childrenCount > adultsCount * 2) {
          return false;
      }
  
      if (babiesCount > adultsCount) {
          return false;
      }
  
      if (childrenCount + babiesCount > adultsCount * 2) {
          return false;
      }
  
      return true;
  }

/* Нещодавно в Grand Mate Hotel добудували новий корпус з 4-місними номерами, і власники знову звернулися до нас по допомогу.

Потрібно створити функцію recommendRoom для сайту, яка буде автоматично рекомендувати потрібну кімнату для введених параметрів adultsCount, childrenCount, babiesCount.

Є два види кімнат:

small room для 4 осіб
big room для 8 осіб
Не забувай про опцію extra bed - додаткове ліжко для немовляти. Воно доступне як для номерів на 4 людини, так і для номерів на 8 осіб.

Можеш не перейматися за валідність даних - canTheyBook валідатор вже перевірив їх. Просто поверни правильний рядок для заданих параметрів.

Приклади:

recommendRoom(2, 2, 1) === 'small room + extra bed'
recommendRoom(2, 1, 1) === 'small room'
recommendRoom(3, 2) === 'big room'
recommendRoom(3, 0, 2) === 'small room + extra bed'
recommendRoom(7, 0, 2) === 'big room + extra bed'
recommendRoom(8) === 'big room' */

function recommendRoom (adultsCount = 0, childrenCount = 0, babiesCount = 0) {

    const totalPeople = adultsCount + childrenCount;
    
        if (totalPeople <= 4) {
            if (babiesCount > 0 && totalPeople + babiesCount > 4) {
                return 'small room + extra bed';
            }
            return 'small room';
        }
    
        if (totalPeople <= 8) {
            if (babiesCount > 0 && totalPeople + babiesCount > 8) {
                return 'big room + extra bed';
            }
            return 'big room';
        }
    }
    