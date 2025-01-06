"use strict";

/* Напиши функцію getCentury, яка приймає рік (year) і повертає століття, в якому він знаходиться.

Примітки:

літочислення починається з 1 року н.е., тому 0 має оброблятися як перший рік н.е.;
1800 слід обробляти як 18-те століття, 1801 - як 19-те століття.
Наприклад:

getCentury(2001) === 21
getCentury(0) === 1
getCentury(1786) === 18
getCentury(1500) === 15
*/

function getCentury(year) {
    if (year === 0) {
      return 1;
    } else {
      return Math.ceil(year / 100);
    }
  }

  /* Кожні декілька місяців Mate academy проводить networking вечірку для всіх студентів, випускників і тих, хто лише планує розпочати навчання.

Та іноді все йде не так, як хотілося б, і заклади закриваються на карантин. На щастя, карантин може бути лише раз на рік і лише на початку року. 
І як тільки він завершується, ми одразу проводимо першу зустріч.

Створи функцію countNetworking, яка приймає два параметри: тривалість карантину в місяцях quarantineLength та періодичність проведення вечірок frequency (1 вечірка кожні frequency місяців).

Поверни кількість вечірок, які Mate academy проведе протягом року.

*/

function countNetworking(quarantineLength, frequency) {
    return Math.ceil((12 - quarantineLength) / frequency);
  }

/* Хороший день для пікніка. Друзі вирішили вибратися у ліс та відпочити. Приїхавши вони дізналися, що у них залишилося дуже мало пального. 
Є два варіанти:

Зателефонувати знайомим і попросити привезти пального.
Дістатися найближчої заправної станції самостійно.
Знаючи кількість пального, яка залишилася fuelRemaining, відстань у кілометрах до найближчої заправки distance та розхід пального на 100км 
fuelConsumption ми можемо допомогти людям прийняти рішення за допомогою функції makeDeсision.
*/

function makeDecision(fuelRemaining, distance, fuelConsumption) {
    if (fuelRemaining < 0 || distance < 0 || fuelConsumption <= 0) {
      return 'please, enter the valid data'
    }
  
    let length = (fuelRemaining / fuelConsumption) * 100;
  
    if (length >= distance) {
      return 'reach gas station by themselves';
    } else {
      return 'ask for help';
    }
  }
  /* Працівникам Mate Exchange набридло конвертувати на калькуляторі валюту з гривні в обрану валюту.

Напиши функцію convertCurrency, яка буде приймати amount в євро, exchangeRate — курс обміну (вартість 1 євро у вказаній валюті) 
та currencyName — назву бажаної валюти. Якщо amount та exchangeRate додатні, функція має повертати рядок Give them {{x}} {{currencyName}}(s); інакше повертати рядок Enter valid data.

Якщо результат не є цілим числом, округли значення до двох знаків після коми.
*/

function convertCurrency(amount, exchangeRate, currencyName) {
    if (amount <= 0 || exchangeRate <= 0) {
      return 'Enter valid data';
    }
  
    let cash = parseFloat((amount * exchangeRate).toFixed(2));
  
    return `Give them ${cash} ${currencyName}(s)`
  }
  