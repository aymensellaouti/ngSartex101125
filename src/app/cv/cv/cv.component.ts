import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.service";
import { TodoService } from "../../todo/service/todo.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  cvService = inject(CvService);
  today = new Date();
  cvs: Cv[] = this.cvService.getCvs();
  constructor(private loggerService: LoggerService) {
    loggerService.log("cc je suis le cv Component");
    this.toastr.info("Bienvenu dans notre CvTech");
  }
  selecetdCv: Cv | null = null;
  // onForwardCv(cv: Cv) {
  //   this.selecetdCv = cv;
  // }
}
