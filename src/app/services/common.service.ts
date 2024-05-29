import { Injectable } from '@angular/core';
import { CommonBtnClass, CommonBtnType } from '../models/auth/login';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


   createButtonConfig(config: CommonBtnType): CommonBtnClass {
    const defaultConfig = new CommonBtnClass();
    return Object.assign(defaultConfig, config);
  }

}
