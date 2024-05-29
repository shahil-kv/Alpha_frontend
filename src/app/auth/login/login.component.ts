import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { BtnCommonComponent } from '../../shared/components/btn-common/btn-common.component';
import { CommonBtnClass, positions } from '../../models/auth/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ButtonModule, RippleModule, NgOptimizedImage, BtnCommonComponent,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {

  BtnData = new CommonBtnClass()
  items:any

  ngOnInit(): void {
    this.onLoad()

  }

  onLoad(){
 this.setupBtn()
  }

  setupBtn(){
this.BtnData.BgColor='black'
    this.BtnData.icon ='arrow_forward'
this.BtnData.textColor='white'
this.BtnData.position=positions.left
  }


}
