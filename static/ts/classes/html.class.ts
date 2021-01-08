import { FileHtmlInterface } from '../interfaces/filehtml.interface';

class Html {
  elements: [];
  parentElement: Element;
  fileHtml: FileHtmlInterface;

  constructor(fileHtml: FileHtmlInterface, element: Element) {
    this.parentElement = element;
    this.fileHtml = fileHtml;
  }

  setElement(index: number, object: any) {
    const elem = this.fileHtml.getElementLayout(index, object);
    this.parentElement.appendChild(elem);
    console.log(this.parentElement);
  }

  save(files: Element) {
    this.fileHtml.save(files);
  }
}
export { Html };
