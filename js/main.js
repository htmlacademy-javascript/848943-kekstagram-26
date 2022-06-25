import {getRandomPositiveInteger} from './util.js';
import {PHOTOS_COUNT, LikesCount, PhrasesCount, CommentsCount, AvatarCount} from './setup.js';
import  {PHOTO_DESCRIPTIONS, PHRASES, AUTHORS} from './raw-data.js';

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

createPhotoGallery();
