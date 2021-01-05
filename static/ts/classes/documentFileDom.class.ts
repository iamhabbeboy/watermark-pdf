import { FileHtmlInterface } from '../interfaces/filehtml.interface';
import { File } from '../enum/file.enum';

class DocumentDom implements FileHtmlInterface {
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
    fileTitleColumn.addEventListener('click', this.showModalDiaglog);
    headerText.addEventListener('click', this.showModalDiaglog);
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
   * @param e
   */
  showModalDiaglog(e) {
    console.log(e);
    $('#file-preview-modal').modal();
  }
}
export { DocumentDom };
