import { PrimeNGConfig } from "primeng/api";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  constructor(private primeNGConfig: PrimeNGConfig) {}
  title = "Ng-Alpha";

  ngOnInit(): void {
    this.configurePrimeNG();
  }

  private configurePrimeNG() {
    this.primeNGConfig.ripple = true;
  }

  isCheck(): string {
    return "new";
  }
}
