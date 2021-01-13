import { FileHtmlInterface } from '../interfaces/filehtml.interface';
import { Draggable } from '../lib/draggable.class';
import { Opacity } from '../classes/opacity.class';
import { Helper } from '../enum/helper.enum';
import { HttpRequest } from './httpRequest.class';

class StampDom implements FileHtmlInterface {
  fileHandler: any;
  constructor(formData: any) {
    this.fileHandler = formData;
  }

  getElementLayout(index: number, file: any) {
    const elem = document.createElement('div'),
      image = document.createElement('img');
    elem.setAttribute(
      'style',
      'z-index:10000;position:absolute;top:10px;left: 0px;'
    );
    elem.setAttribute('id', 'draggable');
    image.src = URL.createObjectURL(file);
    elem.appendChild(image);
    this.setOpacity(elem);
    this.processLogo();
    elem.addEventListener('mousedown', (e) => Draggable(e, elem));

    return elem;
  }

  async processLogo() {
    const config = {
      onUploadProgress: (progressEvent: any) => {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      }
    };
    return new HttpRequest()
      .file(Helper.API_URL, this.fileHandler, config)
      .then((response) => {
        document.querySelector(Helper.STAMP_LOGO_PATH).value = response.data;
      });
  }

  setOpacity(elem: Element) {
    const opacityElement = document.querySelector(Helper.OPACITY);
    const opacity = new Opacity(elem);

    opacityElement.addEventListener('change', (e) => {
      opacity.set(e.target.value);
    });
  }
}

export { StampDom };
