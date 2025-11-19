import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.service";
import { TodoService } from "../../todo/service/todo.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { catchError, Observable, of, startWith, tap } from "rxjs";

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
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    catchError((e) => {
      this.toastr.error(
        "Attention les données sont fictives veuillez contacter l'admin"
      );
      return of(this.cvService.getFakeCvs());
    })
  );
  selecetdCv$: Observable<Cv> = this.cvService.selectedCv$.pipe(
    tap((cv) => {
      console.log("Log from tap un cv sélectionné");
    })
  );
  constructor(private loggerService: LoggerService) {
    loggerService.log("cc je suis le cv Component");
    this.toastr.info("Bienvenu dans notre CvTech");
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: (e) => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(
    //       "Attention les données sont fictives veuillez contacter l'admin"
    //     );
    //   },
    // });
    // this.cvService.selectedCv$.subscribe({
    //   next: (cv) => {
    //     console.log("cv sélectionne ana le cvComponent");

    //     this.selecetdCv = cv;
    //   },
    // });
  }
  // onForwardCv(cv: Cv) {
  //   this.selecetdCv = cv;
  // }
}
