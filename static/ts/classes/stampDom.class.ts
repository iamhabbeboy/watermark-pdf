import { FileHtmlInterface } from '../interfaces/filehtml.interface';

class StampDom implements FileHtmlInterface {
  fileHandler: any;
  constructor(formData: any) {
    this.fileHandler = formData;
  }

  getElementLayout(index: number, file: any) {
    const elem = document.createElement('div'),
      image = document.createElement('img');
    // this.setAttribute(elem, property);
    elem.setAttribute(
      'style',
      'z-index:10000;position:absolute;top:10px;left: 0px'
    );
    elem.setAttribute('id', 'draggable');
    // image.src = URL.createObjectURL(file);
    elem.innerHTML = 'Hello world !';
    // elem.appendChild(image);
    console.log(elem);

    return elem;
  }

  setAttribute(element: Element, value: object) {}
}

export { StampDom };
