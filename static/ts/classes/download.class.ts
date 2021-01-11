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
    this.element.addEventListener('click', (e) =>
      this.getAction(this.documentImagePath)
    );
  }
  getAction(documentImagePath: string) {
    const opacity = document.querySelector(Helper.OPACITY);
    const draggableOffset = document.querySelector(Helper.STAMP_LOGO);
    const stampFilePath = document.querySelector(Helper.STAMP_LOGO_PATH);
    const { top, left } = draggableOffset.getBoundingClientRect();
    return this.getRequest({
      filename: documentImagePath,
      opacity: opacity.value,
      left: left,
      top: top,
      stamp: stampFilePath.value
    });
  }

  async getRequest(payload: object) {
    return new HttpRequest()
      .get(Helper.API_URL + '?action=position', payload)
      .then((res) => {
        if (res.data !== '') {
          const fullpath = `src/${res.data}`;
          window.open(fullpath);
        }
      });
  }
}

export { Download };
