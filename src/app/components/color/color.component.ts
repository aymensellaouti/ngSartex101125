import { Component } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent {
  //state mta3na
  private defaultColor = "red";
  bgc = this.defaultColor;

  changeColor(newColor: HTMLInputElement) {
    this.bgc = newColor.value;
    newColor.value = "";
  }
  reset() {
    this.bgc = this.defaultColor;
  }
}
