import {createPhotoGallery} from './data.js';
const picturesContainer = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoGallery = createPhotoGallery();
const photoGalleryFragment = document.createDocumentFragment();

const drawThumbnails = () => {
  photoGallery.forEach(({id, url, likes, comments}) => {
    const galleryElement = similarPhotoTemplate.cloneNode(true);
    galleryElement.querySelector('.picture__img').src = url;
    galleryElement.querySelector('.picture__img').id = id;
    galleryElement.querySelector('.picture__likes').textContent = likes;
    galleryElement.querySelector('.picture__comments').textContent = comments.length;
    photoGalleryFragment.appendChild(galleryElement);
  });

  picturesContainer.appendChild(photoGalleryFragment);
};

export {drawThumbnails};
export {photoGallery};
export {picturesContainer};
