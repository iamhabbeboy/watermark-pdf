import { AxiosAdapter } from 'axios';

/**
 * File Interface to handle business logic
 */
export interface FileInterface {
  setProperty(payload: [], formName: string);
  getFormData();
  save(http: AxiosAdapter);
}
