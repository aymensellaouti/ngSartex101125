import { Component, Input } from "@angular/core";
import { Observable, timer, map } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() timer = 1000;
  @Input() size = 150;
  @Input() imagesArray = [
    "as.jpg",
    "404.png",
    "cv.png",
    "rotating_card_profile.png",
    "rotating_card_profile2.png",
    "rotating_card_profile3.png",
  ];

  paths$: Observable<any> = timer(0, this.timer).pipe(
    // 0 1 2 3 4 5 6 7 8 9 10
    map((index) => this.imagesArray[index % this.imagesArray.length])
    // paths[0] paths[1]
  );
}
