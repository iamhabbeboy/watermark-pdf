import { FileHtmlInterface } from '../interfaces/filehtml.interface';
import { File } from '../enum/file.enum';
import { HttpRequest } from '../classes/httpRequest.class';
import { PdfImagePreview } from '../lib/pdfImagePreview.class';
import { ImageRenderer } from './imageRenderer.class';
import { Download } from './download.class';
import { Helper } from '../enum/helper.enum';

class DocumentDom implements FileHtmlInterface {
  fileHandler: any;

  constructor(formData: any) {
    this.fileHandler = formData;
  }
  getElementLayout(index: number, file: any) {
    // console.log(file);
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

  setAttribute(el: Element, className: string): Element {
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
    if (window.confirm('Are you sure ?')) {
      e.srcElement.parentElement.parentElement.parentElement.style.display =
        'none';
    }
  }
  /**
   * Using jQuery here is a bad idea
   * in 2021 🙈.
   */
  async showModalDiaglog() {
    const elem = $('#file-preview-modal');
    elem.modal();
    const dom = elem.find(File.IMAGE_PREVIEW);
    const config = {
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        dom.html(
          `<h3>${percentCompleted}%<br/><i>Please wait...</i></h3><progress id="file" value="${percentCompleted}" max="100">${percentCompleted}</progress>`
        );
      }
    };

    new HttpRequest()
      .file(Helper.API_URL, this.fileHandler, config)
      .then((response) => {
        const canvas = document.querySelector(File.PDF_TO_IMAGE_CANVAS_RENDER);
        const imagePreview = document.querySelector(File.IMAGE_PREVIEW);
        const pdfImagePreviewer = new PdfImagePreview(
          canvas,
          new ImageRenderer(imagePreview)
        );
        pdfImagePreviewer.getImage('src/' + response.data);
        const downloadButton = new Download(response.data);
        downloadButton.trigger();
      })
      .catch((error) => alert(error));
  }
}
export { DocumentDom };
