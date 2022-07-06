import {photoGallery} from './draw-thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img').children[0];
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const pictureDescription = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const getPictureDataByID = (thumbnail) => photoGallery.find((item) => item.id === Number(thumbnail.children[0].id));

const getCommentsHTML = (thumbnail) => {
  const thumbnailComments = getPictureDataByID(thumbnail).comments;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < thumbnailComments.length; i++) {
    const newComment = document.createElement('li');
    newComment.classList.add('social__comment');
    newComment.innerHTML = '<img class="social__picture" src="" alt="Аватар комментатора фотографии" width="35" height="35"> <p class="social__text"></p>';

    const newCommentAvatar = newComment.querySelector('img');
    const newCommentMessage = newComment.querySelector('p');
    newCommentAvatar.src = thumbnailComments[i].avatar;
    newCommentMessage.textContent = thumbnailComments[i].message;
    fragment.append(newComment);
  }
  socialComments.innerHTML = '';
  socialComments.append(fragment);
  return socialComments;
};

const closeBigPicture = () => {
  const closeButton = bigPicture.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      bigPicture.classList.add('hidden');
    }
  });
  document.body.classList.remove('modal-open');
};

const addThumbnailClickHandler = function (thumbnail) {
  thumbnail.addEventListener('click', () => {
    //const {, url, description, likes, comments} = getPictureDataByID(thumbnail);
    /*линтер ругается на запись выше, хотя в статье про деструктуризацию указано,
    что порядок важен и для того, чтобы деструктурировать только нужные свойства,
    надо место ненужных оставить пустым.*/
    const url = getPictureDataByID(thumbnail).url;
    const description = getPictureDataByID(thumbnail).description;
    const likes = getPictureDataByID(thumbnail).likes;
    const comments = getPictureDataByID(thumbnail).comments;

    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    bigPictureImage.src = url;
    likesCount.textContent = likes;
    pictureDescription.textContent = description;
    commentsCount.textContent = comments.length;
    getCommentsHTML(thumbnail);
    closeBigPicture();
    return bigPicture;
  });
};

export {addThumbnailClickHandler};
