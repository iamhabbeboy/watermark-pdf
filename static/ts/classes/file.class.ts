import { AxiosAdapter } from 'axios';
import { FileInterface } from '../interfaces/file.Interface';
import { Html } from './html.class';
/**
 *  Handles the file upload logic
 */
class File implements FileInterface {
  formName: string;
  fileObject: any;

  constructor() {
    // this.http = httprequest;
  }
  /**
   * Set file properties
   * @param payload
   */
  setProperty(fileElement: any, formName: string) {
    this.fileObject = fileElement;
    this.formName = formName;
  }

  getFormData() {
    let formData = new FormData();
    formData.append(this.formName, this.fileObject);
    return formData;
  }
  /**
   *
   * @param html
   */
  processElement(html: Html) {
    const files = this.fileObject.files;
    if (files.length > 0) {
      for (let [index, file] of Array.from(files).entries()) {
        //validation
        //embed on element
        html.setElement(index, file);
      }
    }
  }

  save(http: AxiosAdapter) {
    return this.getFormData();
  }
}

export { File };
