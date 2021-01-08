import { FileHtmlInterface } from '../interfaces/filehtml.interface';
import { File } from '../enum/file.enum';
import { HttpRequest } from '../classes/httpRequest.class';
import axios from 'axios';
import { PdfImagePreview } from '../lib/pdfImagePreview.class';
import { ImageRenderer } from './imageRenderer.class';

class DocumentDom implements FileHtmlInterface {
  fileHandler: any;

  constructor(formData: any) {
    this.fileHandler = formData;
  }
  getElementLayout(index: number, file: any) {
    const row = document.createElement('div'),
      list = document.createElement('li'),
      fileTitleColumn = document.createElement('div'),
      deleteButtonColumn = document.createElement('div'),
      headerText = document.createElement('h5'),
      deleteButton = document.createElement('button');

    this.setAttribute(row, 'row');
    this.setAttribute(fileTitleColumn, 'col-md-10');
    this.setAttribute(deleteButtonColumn, 'col-md-2');

    this.setAttribute(deleteButton, 'btn btn-danger btn-sm');

    row.appendChild(fileTitleColumn);
    row.appendChild(deleteButtonColumn);

    fileTitleColumn.textContent = `Size: ${Math.floor(
      file.size / File.FILE_SIZE_TO_KILOBYTE
    )}KB`;

    this.setText(deleteButton, 'Delete x');
    deleteButton.addEventListener('click', this.deleteButtonAction);
    fileTitleColumn.addEventListener('click', (e) => this.showModalDiaglog());
    headerText.addEventListener('click', (e) => this.showModalDiaglog());
    deleteButtonColumn.appendChild(deleteButton);

    this.getList(list, index);
    this.setText(headerText, file.name);

    list.appendChild(headerText);
    list.appendChild(row);
    return list;
  }

  setAttribute(el: Element, className: string) {
    el.className = className;
    return el;
  }

  setText(el: Element, text: string): Element {
    el.textContent = text;
    return el;
  }

  getList(list, index: number) {
    list.className = `list-group-item file-list file-event${index}`;
    return list;
  }

  deleteButtonAction(e) {
    e.preventDefault();
    alert('hello world');
  }
  /**
   * Using jQuery here is a bad idea
   * in 2021 🙈.
   */
  showModalDiaglog() {
    const elem = $('#file-preview-modal');
    elem.modal();
    const dom = elem.find('#preview');
    const config = {
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
        dom.html(
          `<h3>${percentCompleted}%<br/><i>Please wait...</i></h3><progress id="file" value="${percentCompleted}" max="100">${percentCompleted}</progress>`
        );
      }
    };
    new HttpRequest()
      .file('src/request.php', this.fileHandler, config)
      .then((response) => {
        const canvas = document.querySelector('#the-canvas');
        const imagePreview = document.querySelector('#preview');
        const pdfImagePreviewer = new PdfImagePreview(
          canvas,
          new ImageRenderer()
        );
        pdfImagePreviewer.getImage('src/' + response.data);
      })
      .catch((error) => alert(error));
  }
}
export { DocumentDom };
