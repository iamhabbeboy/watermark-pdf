import { Html } from './html.class';
/**
 *  Handles the file upload logic
 */
abstract class BaseFile {
  formName: string;
  fileObject: any;

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
    formData.append(this.formName, this.fileObject.files[0]);
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
}

export { BaseFile };
