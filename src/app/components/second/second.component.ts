import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-second",
  template: `
    <div class="alert alert-info">
      <p>second works</p>
    </div>
  `,
  styles: [``],
})
export class SecondComponent {
  acr = inject(ActivatedRoute);
}
