import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NgOptimizedImage } from '@angular/common';
import { BtnCommonComponent } from '../../shared/components/btn-common/btn-common.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ButtonModule, RippleModule, NgOptimizedImage, BtnCommonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  secondName = signal('Value set in App Component');
}
