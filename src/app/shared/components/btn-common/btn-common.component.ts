import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonBtnType, positions } from '../../../models/auth/login';

@Component({
  selector: 'app-btn-common',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button

      class="w-full p-4 text-xl text-center rounded-xl btn relative shadow-lg font-semibold"
      [ngStyle]="{
        color: CommonBtnData.textColor,
        'background-color': CommonBtnData.BgColor,
        'border': CommonBtnData.border
      }"
    >
      <ng-container *ngIf="CommonBtnData.position === position.left ">
        <img
          *ngIf="CommonBtnData.pathImage"
          class="common-btn-left"
          [src]="CommonBtnData.pathImage"
          alt="btn-logo"
        />
        <span class="common-btn-left text-3xl material-symbols-outlined">
          {{ CommonBtnData.icon }}
        </span>
      </ng-container>
      <ng-content class="font-size-xl"></ng-content>
      <ng-container *ngIf="CommonBtnData.position === position.right">
        <img
          *ngIf="CommonBtnData.pathImage"
          [src]="CommonBtnData.pathImage"
          class="common-btn-right"
          alt="btn-logo"
        />
        <span  class="absolute common-btn-right ml-2 text-3xl material-symbols-outlined">
          {{ CommonBtnData.icon }}
        </span>
      </ng-container>
    </button>
  `,

})
export class BtnCommonComponent {
  position=positions
  @Input() CommonBtnData!:CommonBtnType
}
