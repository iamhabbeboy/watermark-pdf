import { FileHtmlInterface } from '../interfaces/filehtml.interface';

class Html {
  elements: [];
  parentElement: Element;
  fileHtml: FileHtmlInterface;

  constructor(fileHtml: FileHtmlInterface, element: Element) {
    this.parentElement = element;
    this.fileHtml = fileHtml;
  }

  setElement(index: number, object: any, formData: any) {
    const elem = this.fileHtml.getElementLayout(index, object, formData);
    this.parentElement.appendChild(elem);
  }

  // save(files: Element) {
  //   this.fileHtml.save(files);
  // }
}
export { Html };
