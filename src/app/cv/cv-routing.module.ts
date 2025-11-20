import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";

export const CV_ROUTES = [
  { path: "", component: CvComponent },
  { path: "add", component: AddCvComponent, canActivate: [authGuard] },
  { path: ":id", component: DetailsCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
