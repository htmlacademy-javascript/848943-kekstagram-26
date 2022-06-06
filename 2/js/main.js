//Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandom (minNumber, maxNumber) {
  if (minNumber < maxNumber && minNumber >= 0) {
    const random = Math.round((Math.random() * (maxNumber-minNumber)) + minNumber);
    return random;
  }
  if (minNumber < 0) {
    return 'Диапазон может быть только положительный';
  }
  return 'Первое число должно быть меньше второго';
}

getRandom(6, 10);

//Функция для проверки максимальной длины строки

function checkTextLength (text, maxLength) {
  return (text.length <= maxLength);
}

checkTextLength('Какой-то текст', 50);
