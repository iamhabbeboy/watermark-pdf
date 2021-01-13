import { BaseFile } from './baseFile.class';
import { FileDom } from '../enum/filedom.enum';
import { FileInterface } from '../interfaces/file.Interface';
import { Html } from './html.class';
import { StampDom } from './stampDom.class';

class StampFile extends BaseFile implements FileInterface {
  button: Element;
  fileElement: Element;
  elementPlaceholder: Element;

  constructor() {
    super();
    this.button = document.querySelector(FileDom.STAMP_UPLOADER);
    this.fileElement = document.querySelector(FileDom.STAMP_FILE);
    this.elementPlaceholder = document.querySelector(FileDom.STAMP_PLACEHOLDER);
  }

  processAction(): void {
    const that = this;
    this.button.addEventListener('click', function (e) {
      e.preventDefault();
      that.fileElement.click();
    });

    this.fileElement.addEventListener('change', function (e) {
      that.setProperty(this, FileDom.STAMP_FORM_NAME);
      that.processElement(new Html(new StampDom(), that.elementPlaceholder));
    });
  }
}

export { StampFile };
