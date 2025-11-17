import { Component } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent {
  name = "aymen";
  isHidden = false;
  message = "";
  constructor() {
    // setInterval(() => {
    //   this.isHidden = !this.isHidden;
    // }, 2000);
    // setTimeout(() => {
    //   this.name = "chedi";
    // }, 4000);
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
