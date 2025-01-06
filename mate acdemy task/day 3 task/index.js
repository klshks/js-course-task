'use strict'

/*У цьому завданні ти навчишся «перевертати» рядок та прибирати зайві символи.

Створи функцію isWerewolf, яка приймає рядок target і повертає true, якщо це перевертень, або false — якщо ні.

Перевертень — це слово або речення, яке читається однаково в обох напрямках (зліва направо й навпаки), при цьому ігноруючи регістр, пробіли та розділові знаки.*/

function isWerewolf(target) {
    let direct = '';
    let reversed = '';
    
    // Перебір символів у рядку
    for (let char of target.toLowerCase()) {
      if (/[a-z]/.test(char)) { // Перевірка, чи є символ літерою
        direct += char;
        reversed = char + reversed;
      }
    }
    
    // Порівняння прямого та зворотного рядка
    return direct === reversed;
  }

  
  /* А тепер «розріжемо» рядок на частини 😎

Реалізуй функцію splitString, яка приймає рядок str, ділить його на частини по 2 символи, а потім повертає масив з отриманих частин.

Зверни увагу: якщо рядок містить непарну кількість символів, додай символ _ після останнього символу.*/

function splitString(str) {
    let result = [];
    let string = str;
  
    if (string.length % 2 !== 0) {
      string = string + '_';
    }
  
    for (let i = 0; i < str.length; i += 2) {
      result.push(string.slice(i, i + 2));
    }
  
    return result;
  }

  /* Оголоси змінну myString з текстом, який містить перенос рядка:

Hello, world!
It's JavaScript!

Не використовуй подвійні лапки
Не використовуй зворотні лапки */

let myString = 'Hello, world!\nIt\'s JavaScript!';