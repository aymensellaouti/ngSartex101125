import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.service";
import { TodoService } from "../../todo/service/todo.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  todoService = inject(TodoService);
  today = new Date();
  cvs: Cv[] = [
    new Cv(1, "anis", "El Hadj Ali", "Dev", "", "12121212", 20),
    new Cv(
      2,
      "sonia",
      "El Hadj Ali",
      "Dev",
      "rotating_card_profile.png",
      "12121212",
      20
    ),
    new Cv(3, "youssef", "zarrad", "Dev", "         ", "12121212", 20),
  ];
  constructor(private loggerService: LoggerService) {
    loggerService.log("cc je suis le cv Component");
  }
  selecetdCv: Cv | null = null;
  onForwardCv(cv: Cv) {
    this.selecetdCv = cv;
  }
}
