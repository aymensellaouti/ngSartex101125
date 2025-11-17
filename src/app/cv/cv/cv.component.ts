import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      "anis",
      "El Hadj Ali",
      "Dev",
      "rotating_card_profile2.png",
      "12121212",
      20
    ),
    new Cv(
      2,
      "sonia",
      "El Hadj Ali",
      "Dev",
      "rotating_card_profile.png",
      "12121212",
      20
    ),
    new Cv(
      3,
      "youssef",
      "zarrad",
      "Dev",
      "rotating_card_profile3.png",
      "12121212",
      20
    ),
  ];

  selecetdCv: Cv | null = null;
  onForwardCv(cv: Cv) {
    this.selecetdCv = cv;
  }
}
