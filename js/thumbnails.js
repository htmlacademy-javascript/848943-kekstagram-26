import {createPhotoGallery} from './data.js';

const similarPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoGallery = createPhotoGallery();
const picturesContainer = document.querySelector('.pictures');
const photoGalleryFragment = document.createDocumentFragment();

photoGallery.forEach(({url, likes, comments}) => {
  const galleryElement = similarPhotoTemplate.cloneNode(true);
  galleryElement.querySelector('.picture__img').src = url;
  galleryElement.querySelector('.picture__likes').textContent = likes;
  galleryElement.querySelector('.picture__comments').textContent = comments.length;
  photoGalleryFragment.appendChild(galleryElement);
});

picturesContainer.appendChild(photoGalleryFragment);

export {picturesContainer};
