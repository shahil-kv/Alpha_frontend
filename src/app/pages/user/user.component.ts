import { Component } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { UserRoute } from './user.routes';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}
