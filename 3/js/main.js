//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNumber = (min,max) => {
  if (min < max && min >= 0) {
    const random = Math.round((Math.random() * (max-min)) + min);
    return random;
  }
  if (min < 0) {
    return 'Диапазон может быть только положительный';
  }
  return 'Первое число должно быть меньше второго';
};

getRandomNumber(6, 10);

//Функция для проверки максимальной длины строки
const checkTextLength = (text, maxLength) => text.length <= maxLength;
checkTextLength('Какой-то текст', 50);

//Функция от Кекса, возвращающая случайное целое число
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//module4-task1

const PHOTOS_COUNT = 25;

//Функция для поиска уникального идентификатора в заданном диапазоне
const getRandomUnicID = (min, max, arr) => {
  let unicID = 0;
  do {
    unicID = getRandomPositiveInteger(min, max);
  }
  while (arr.includes(unicID) && arr.length <= max);
  arr.push(unicID);
  return unicID;
};

//массив - описание фотографий
const PHOTO_DESCRIPTIONS = [
  'Пляж',
  'В направлении лета',
  'Море',
  'На рассвете',
  'Кулинарный юмор',
  'Моя тачка',
  'Завтрак самурая',
  'Любимый напиток',
  'Полет нормальный',
  'Обувь',
  'Дорога к морю',
  'Audi',
  'Салат',
  'Котосуши',
  'Космошузы',
  'Над облаками',
  'Распевка',
  'Ретромобиль',
  'Теперь можно бегать к холодильнику по ночам',
  'Пальмы',
  'Салат',
  'Закат на море',
  'Краб',
  'Вечернее шоу',
  'Водные процедуры'
];

//массив - тексты для комментариев
const PHRASES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

//Имена авторов
const AUTHORS = [
  'Мимо проходила',
  'Кедра Выдра',
  'Киссяндра',
  'Толстяк Хомяк',
  'Ромэн Пармезан',
  'КиссМисс'
];

//функция создания комментария из случайно выбранных 1-2 фраз

const mixPhrases = () => {
  const comments = [];
  const phrasesQty = getRandomPositiveInteger(1, 2);
  do {
    const newComment = getRandomPositiveInteger(0, PHRASES.length-1);
    comments.push(PHRASES[newComment]);
  }
  while (comments.length <= phrasesQty);
  return comments.join('');
};

//массив из созданных комментариев
const mixedPhrases = Array.from({length: PHOTOS_COUNT}, mixPhrases);

//функция выбора случайного комментария

const getRandomComment = () => {
  const commentsQty = getRandomPositiveInteger(1, 3);
  const randomCommentIDs = [];
  const unicCommentIDs = []; //кэширование идентификаторов комментариев

  for (let i = 0; i < commentsQty; i++) {
    const newCommentID = getRandomUnicID(1, PHOTOS_COUNT, unicCommentIDs);
    randomCommentIDs.push(newCommentID);
  }
  return randomCommentIDs;
};

//массив идентификаторов списков комментариев
const commentListIDs = Array.from({length: PHOTOS_COUNT*3}, getRandomComment);

//создание массива из списков текстов комментариев с именами авторов

const createComment = (element) => {
  const commentsCash = [];
  return {
    id: getRandomUnicID(1, PHOTOS_COUNT*3, commentsCash),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: mixedPhrases[element],
    name: AUTHORS[getRandomPositiveInteger(0,AUTHORS.length-1)]
  };
};

const COMMENTS = commentListIDs.map((item) => item.map((element) => createComment(element)));

//кэширование уникальных идентификаторов
const photoIDsCash = [];
const commentsIDsCash = [];

//создание объектов-фото
const createPhoto = () => {

  const randomPhotoIndex = getRandomUnicID(0, PHOTOS_COUNT-1, photoIDsCash);
  const randomCommentArr = getRandomUnicID(1, COMMENTS.length-1, commentsIDsCash);

  return {
    id: randomPhotoIndex,
    url: `photos/${  randomPhotoIndex  }.jpg`,
    description: PHOTO_DESCRIPTIONS[randomPhotoIndex],
    likes: getRandomPositiveInteger(15, 200),
    comments: COMMENTS[randomCommentArr]
  };
};

const photoGallery = Array.from({length: PHOTOS_COUNT}, createPhoto);
// eslint-disable-next-line no-console
console.log(photoGallery);
