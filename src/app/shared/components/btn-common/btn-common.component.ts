import { Component, input, Input, OnChanges, OnInit, Signal } from '@angular/core';
import { CommonBtnType } from '../../../models/auth/login';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-btn-common',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-common.component.html',
  styleUrl: './btn-common.component.scss',
})
export class BtnCommonComponent  {
  @Input({required:true}) CommonBtnData!: CommonBtnType



}
