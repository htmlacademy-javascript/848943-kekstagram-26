import {drawThumbnails} from './draw-thumbnails.js';
import {picturesContainer} from './draw-thumbnails.js';
import {addThumbnailClickHandler} from './draw-big-picture.js';

const picturesList = picturesContainer.children;

drawThumbnails();

for (let i = 2; i < picturesList.length - 2; i++) {
  addThumbnailClickHandler(picturesList[i]);
}
