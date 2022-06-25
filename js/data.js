import {getRandomPositiveInteger} from './util.js';
import {PHOTOS_COUNT, LikesCount, PhrasesCount, CommentsCount, AvatarCount} from './setup.js';

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

const PHRASES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

const AUTHORS = [
  'Мимо проходила',
  'Кедра Выдра',
  'Киссяндра',
  'Толстяк Хомяк',
  'Ромэн Пармезан',
  'КиссМисс'
];

let PhotoID = 0;
let CommentID = 0;

const createMessage = () => {
  const phrasesCount = getRandomPositiveInteger(PhrasesCount.min, PhrasesCount.max);
  const message = [];
  for (let i = 1; i <= phrasesCount; i++) {
    message.push(PHRASES[getRandomPositiveInteger(0, PHRASES.length -1)]);
  }
  return [...  new Set(message)].join(' ');
};

const createComment = () => {
  CommentID++;
  return {
    id: CommentID,
    avatar: `img/avatar-${getRandomPositiveInteger(AvatarCount.min, AvatarCount.max)}.svg`,
    message: createMessage(),
    name: AUTHORS[getRandomPositiveInteger(0, AUTHORS.length - 1)]
  };
};

const createPhoto = () => {
  PhotoID++;
  return {
    id: PhotoID,
    url: `photos/${  getRandomPositiveInteger(1, PHOTO_DESCRIPTIONS.length)  }.jpg`,
    description: PHOTO_DESCRIPTIONS[getRandomPositiveInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
    likes: getRandomPositiveInteger(LikesCount.min, LikesCount.max),
    comments: Array.from({length: getRandomPositiveInteger(CommentsCount.min, CommentsCount.max)}, createComment)
  };
};

const createPhotoGallery = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

export {createPhotoGallery};