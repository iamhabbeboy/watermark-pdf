import { Html } from './html.class';
import { File } from '../enum/file.enum';
/**
 *  Handles the file upload logic
 */
abstract class BaseFile {
  formName: string;
  fileObject: any;
  fileList: any;

  /**
   * Set file properties
   * @param payload
   */
  setProperty(fileElement: any, formName: string) {
    this.fileObject = fileElement;
    this.formName = formName;
  }

  private getFormData(file: any) {
    let formData = new FormData();
    formData.append(this.formName, file);

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
        let filesize = Math.ceil(file.size / File.FILE_SIZE_TO_KILOBYTE);
        if (filesize > File.MAX_FILE_SIZE) {
          alert('Max file size is 1MB');
        } else {
          let formData = this.getFormData(file);
          html.setElement(index, file, formData);
        }
      }
    }
  }
}

export { BaseFile };
