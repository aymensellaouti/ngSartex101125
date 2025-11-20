import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvCardComponent } from "./cv-card/cv-card.component";
import { CvItemComponent } from "./cv-item/cv-item.component";
import { CvListComponent } from "./cv-list/cv-list.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { EmbaucheComponent } from "./embauche/embauche.component";
import { DefaultImagePipe } from "./pipes/default-image.pipe";
import { Btc2usdPipe } from "../pipes/btc2usd.pipe";
import { CvRoutingModule } from "./cv-routing.module";

@NgModule({
  declarations: [
    // CV
    CvComponent,
    CvListComponent,
    CvItemComponent,
    CvCardComponent,
    DefaultImagePipe,
    DetailsCvComponent,
    EmbaucheComponent,
    AddCvComponent,
    Btc2usdPipe,
  ],
  imports: [CommonModule, CvRoutingModule],
})
export class CvModule {}
