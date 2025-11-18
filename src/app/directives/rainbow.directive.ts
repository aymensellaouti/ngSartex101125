import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "input[appRainbow][type=text]",
})
export class RainbowDirective {
  @HostBinding("style.color")
  @HostBinding("style.borderColor")
  color = "black";
  constructor() {
    console.log("RainbowDirective");
  }
  private getRandomColor(): string {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  @HostListener("keyup")
  onKeyUp() {
    this.color = this.getRandomColor();
  }
}
