import { Helper } from '../enum/helper.enum';
import { HttpRequest } from './httpRequest.class';

class Download {
  element: any;
  opacity: any;
  draggableOffset: any;
  documentImagePath: string;
  constructor(documentImagePath: string) {
    this.documentImagePath = documentImagePath;
    this.element = document.querySelector(Helper.DOWNLOAD_BUTTON);
  }
  trigger() {
    const that = this;
    this.element.addEventListener('click', (e) => {
      e.srcElement.innerText = 'please wait..';
      e.srcElement.setAttribute('disabled', 'disabled');
      that.getAction(that.documentImagePath);
    });
  }
  getAction(documentImagePath: string) {
    const opacity = document.querySelector(Helper.OPACITY);
    const draggableOffset = document.querySelector(Helper.STAMP_LOGO);
    const stampFilePath = document.querySelector(Helper.STAMP_LOGO_PATH);
    const { offsetTop, offsetLeft } = draggableOffset;
    return this.getRequest({
      top: offsetTop,
      left: offsetLeft,
      opacity: opacity.value,
      stamp: stampFilePath.value,
      filename: documentImagePath
    });
  }

  async getRequest(payload: object) {
    const that = this;
    return new HttpRequest()
      .get(Helper.API_URL + '?action=position', payload)
      .then((res) => {
        if (res.data !== '') {
          const fullpath = `src/${res.data}`;
          that.element.innerText = 'Download';
          that.element.removeAttribute('disabled');
          window.open(fullpath);
        }
      });
  }
}

export { Download };
