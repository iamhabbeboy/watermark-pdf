import { FileDom } from '../enum/filedom.enum';
import { Helper } from '../enum/helper.enum';
import { HttpRequest } from './httpRequest.class';

class Download {
  element: any;
  opacity: any;
  draggableOffset: any;
  documentImagePath: string;
  stampFilePath: any;
  constructor(documentImagePath: string, downloadButtonElement: Element) {
    this.documentImagePath = documentImagePath;
    this.element = downloadButtonElement;
    this.stampFilePath = document.querySelector(Helper.STAMP_LOGO_PATH);
  }
  trigger() {
    const that = this;
    this.element.addEventListener('click', (e) => {
      if (this.stampFilePath.value === '') {
        return alert('Please upload stamp image!');
      }

      e.srcElement.innerText = 'please wait..';
      e.srcElement.setAttribute('disabled', 'disabled');

      that.getAction();
    });
  }
  private getAction() {
    const opacity = document.querySelector(Helper.OPACITY);
    const draggableOffset = document.querySelector(Helper.STAMP_LOGO);
    const { offsetTop, offsetLeft } = draggableOffset;
    return this.getRequest({
      top: offsetTop,
      left: offsetLeft,
      opacity: opacity.value,
      stamp: this.stampFilePath.value,
      filename: this.documentImagePath
    });
  }

  private async getRequest(payload: object) {
    const that = this;
    return new HttpRequest()
      .get(Helper.API_URL + '?action=position', payload)
      .then((res) => {
        if (res.data !== '') {
          const fullpath = `src/${res.data}`;
          that.element.innerText = 'Download';
          that.element.removeAttribute('disabled');
          return window.open(fullpath);
        }
        return alert('Error Occured while processing data');
      });
  }
}

export { Download };
