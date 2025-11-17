import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-fils",
  templateUrl: "./fils.component.html",
  styleUrls: ["./fils.component.css"],
})
export class FilsComponent {
  @Input({
    alias: "message",
    // required: true,
    // transform: (value: string) => {
    //   return "bara or9ed";
    // },
  })
  messageDePapa = "rien";
  @Output()
  sendMessageToDad = new EventEmitter<string>();

  onSendMessage() {
    this.sendMessageToDad.emit("enajem nkhali el ba9i 3andi ?");
  }
}
