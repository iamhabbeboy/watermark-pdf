import { FileDom } from '../enum/filedom.enum';
import { FileInterface } from '../interfaces/file.Interface';
import { BaseFile } from './baseFile.class';
import { DocumentDom } from './documentFileDom.class';
import { Html } from './html.class';

class DocumentFile extends BaseFile implements FileInterface {
  button: Element;
  file: FileInterface;
  fileElement: Element;
  parentListing: Element;

  constructor() {
    super();
    this.button = document.querySelector(FileDom.DOCUMENT_BUTTON);
    this.fileElement = document.querySelector(FileDom.DOCUMENT_UPLOAD);
    this.parentListing = document.querySelector(FileDom.DOCUMENT_LISTING);
  }

  processAction(): void {
    const that = this;

    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      that.fileElement.click();
    });

    this.fileElement.addEventListener('change', (e) => {
      that.setProperty(e.target, FileDom.DOCUMENT_FORM_NAME);
      that.processElement(new Html(new DocumentDom(), that.parentListing));
    });
  }
}

export { DocumentFile };
