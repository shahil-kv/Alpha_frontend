import { Component, input, Input, OnChanges, OnInit, Signal } from '@angular/core';
import { CommonBtnType } from '../../../models/auth/login';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-btn-common',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button class="w-full  p-4 text-2xl text-center rounded-lg btn" [ngStyle]="{
    'color': CommonBtnData.textColor ,
    'background-color': CommonBtnData.BgColor ,
  }">
  <ng-content></ng-content>
  <span class="absolute ml-2 text-3xl material-symbols-outlined">{{CommonBtnData.icon}}</span>
</button>
  `,

})
export class BtnCommonComponent  {
  @Input({required:true}) CommonBtnData!: CommonBtnType



}
