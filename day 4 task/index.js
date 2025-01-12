'use strict'
/* Створи функцію isSpecialNumber, яка приймає додатне число n і визначає, чи є воно особливим.

Число називається особливим, якщо кожна його цифра не більша ніж 5 (0, 1, 2, 3, 4 або 5).

Функція повинна повернути рядок 'Special!!', якщо число особливе, та 'NOT!!' — якщо ні. */

function isSpecialNumber(n) {
    let str = n.toString();
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] > '5') {
        return 'NOT!!';
      } 
    }
    return 'Special!!';
  }

/* А тепер перевіримо, чи всі наші числа охайні. Число вважається охайним, якщо кожна його цифра не менша за попередню.

Реалізуй функцію isTidy, яка приймає додатне число та повертає true, якщо воно охайне, інакше — false. */

function isTidy(n) {
    let str = n.toString();
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] < str[i -1]) {
        return false;
      }
    }
    return true;
  }

/* Реалізуй функцію isJumping, яка приймає число та повертає рядок 'JUMPING', якщо кожна цифра в числі відрізняється від сусідньої на 1, а якщо ні — рядок 'NOT JUMPING'.

Зверни увагу:

вхідне число завжди додатне;
різниця між 9 і 0 не дорівнює 1;
якщо поруч стоять однакові цифри, то число 'NOT JUMPING';
якщо число складається з однієї цифри — воно 'JUMPING'.
 
*/

function isJumping(n) {
    let str = n.toString();
  
    for (let i = 1; i < str.length; i++) {
      if (str[i] - str [i - 1] !== 1 && str[i] - str [i - 1] !== -1) {
        return 'NOT JUMPING';
      }
    }
    return 'JUMPING';
  }
/* У цьому завданні створи функцію makeAbbr, яка приймає рядок зі слів words та повертає абревіатуру з них у верхньому регістрі.

Рядок words містить одне або декілька слів, розділених одним пробілом. */

function makeAbbr(words) {
    let abbreviation = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i] === ' ') {
        abbreviation += words[i + 1]
      }
    }
    return abbreviation.toUpperCase();
  }
  
/*  А тепер ти навчишся міняти порядок символів у рядку.

Напиши функцію scrollingText, яка:

приймає рядок word;
послідовно переставляє всі символи в рядку з нульового індексу на останній;
повертає масив з отриманими комбінаціями рядка у верхньому регістрі.
Наприклад, для слова 'robot':

перший крок: беремо першу літеру (r) слова 'robot' і переставляємо її в кінець слова — 'obotr';
другий крок: беремо першу літеру (о) слова 'obotr' і переставляємо її в кінець – 'botro' і так далі.
*/

function scrollingText(word) {
    let newWord = [];
  
    for (let i = 0; i < word.length; i++) {
      let newSlice = '';
      newSlice = word.slice(i) + word.slice(0, i);
      newWord.push(newSlice.toUpperCase());
    }
  
    return newWord;
  }

/*Завтра у першокласників буде самостійна робота. Вчать абетку бідолахи. Та ще гірше, тому вчителю, який це все має перевіряти.

У дітей завдання згадати порядок букв у алфавіті та написати стільки букв, скільки вони пам'ятають. Завдання вчителя перевірити, чи діти пишуть букви у правильній послідовності та чи не пропущена буква в рядку. Великі букви чи маленькі значення немає.

Твоє завдання: допоможи вчителю функцією isAlphabet, яка буде приймати letters і повертати true, якщо літери в рядку йдуть в алфавітному порядку без пропущених літер чи дублювань, інакше — false.

Приклади:

isAlphabet('abc') === true
isAlphabet ('aBc') === true
isAlphabet('abd') === false - після b йде c
isAlphabet('a') === true
isAlphabet('') === false - завдання не виконано
isAlphabet('abcdefghjiklmnopqrstuvwxyz') === false - j йде після i
isAlphabet('tuvwxyz') === true
isAlphabet ('XYZ') === true
isAlphabet('mnoprqst') === false - q йде перед r
*/

function isAlphabet(letters) {
    let req = letters.toLowerCase();
  
    if (req.length === 0) {
      return false;
    }
  
    if (req.length === 1) {
      return true;
    }
  
    return 'abcdefghijklmnopqrstuvwxyz'.includes(req);
  }

