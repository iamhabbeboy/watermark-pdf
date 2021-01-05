/**
 * A file uploader class that handles all actions.
 */
export class FileUpload {
  /**
   * @param {Array} payload Set file upload properties.
   */
  constructor(httpRequest) {
    this.files = [];
    this.http = httpRequest;
    this.hasMultipleFile = false;
  }

  /**
   * @param {string} formName An argument that makes this more interesting.
   * @return FormData property
   */
  setFileProperty(payload) {
    this.files = payload.files || [];
    this.hasMultipleFile = payload.hasMany ?? false;
    const file = this.hasMultipleFile ? this.files : this.files[0];

    const getData = new FormData();
    getData.append(formName, file);

    this.formData = getData;
  }

  getFileProperty() {}

  processFile(payload) {
    this.http();
  }
}
