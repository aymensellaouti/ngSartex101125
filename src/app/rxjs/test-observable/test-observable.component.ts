import { Component, inject } from "@angular/core";
import { filter, map, Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  // counter = 5;
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // this.myObservable$.subscribe({
    //   next: (val) => {
    //     this.counter = val;
    //   },
    // });
    // setTimeout(() => {
    this.myObservable$
      .pipe(
        // 5 4 3 2 1
        map((data) => data * 3),
        // 15 12 9 6 3
        filter((valeur) => valeur % 2 == 0)
        // 12 6
      )
      .subscribe({
        next: (data) => {
          this.toastr.info("" + data);
        },
        complete: () => {
          this.toastr.error("BOOOOMMM!!!!!!");
        },
      });
    // }, 3000);
  }
}
