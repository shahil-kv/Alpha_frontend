import { Component, Input, OnInit, Signal } from '@angular/core';

@Component({
  selector: 'app-btn-common',
  standalone: true,
  imports: [],
  templateUrl: './btn-common.component.html',
  styleUrl: './btn-common.component.scss',
})
export class BtnCommonComponent implements OnInit{
  @Input() firstName?: Signal<string>;

  ngOnInit(): void {
      console.log(this.firstName)
  }
}
