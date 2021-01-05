import { FileDom } from '../enum/filedom.enum';
import { FileInterface } from '../interfaces/file.Interface';
import { DocumentDom } from './documentFileDom.class';
import { Html } from './html.class';

class DocumentFile {
  file: any;
  button: Element;
  fileElement: Element;
  parentListing: Element;

  constructor(fileUpload: FileInterface) {
    this.file = fileUpload;
    this.button = document.querySelector(FileDom.DOCUMENT_BUTTON);
    this.fileElement = document.querySelector(FileDom.DOCUMENT_UPLOAD);
    this.parentListing = document.querySelector(FileDom.DOCUMENT_LISTING);
  }

  processAction() {
    const that = this;

    this.button.addEventListener('click', function (e) {
      e.preventDefault();
      that.fileElement.click();
    });

    this.fileElement.addEventListener('change', function (e) {
      that.file.setProperty(this, FileDom.FORM_NAME);
      that.file.processElement(new Html(new DocumentDom(), that.parentListing));
    });
  }
}

export { DocumentFile };
