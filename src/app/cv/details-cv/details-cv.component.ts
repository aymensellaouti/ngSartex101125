import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../config/app-routes.config";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-details-cv",
  templateUrl: "./details-cv.component.html",
  styleUrls: ["./details-cv.component.css"],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  toastr = inject(ToastrService);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params["id"];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => (this.cv = cv),
      error: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: (response) => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toastr.error(
            `un problème est survenu, veuillez contatcer l'admin`
          );
        },
      });
      //
    }
  }
  selectCv() {
    if (this.cv) this.cvService.selectCv(this.cv);
  }
}
