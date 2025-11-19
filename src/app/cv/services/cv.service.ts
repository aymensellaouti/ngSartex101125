import { inject, Injectable } from "@angular/core";
import { Cv } from "../model/cv.model";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app-api.config";

@Injectable({
  providedIn: "root",
})
export class CvService {
  #cvs = [
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
  // Cv1 Cv3 CV9 Cv1 ....
  /**
   * Le subject des cvs sélectionnés
   *
   * */
  #selectCvSubject$ = new Subject<Cv>();
  /**
   * Le flux des cvs séléctionnés
   */
  selectedCv$ = this.#selectCvSubject$.asObservable();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */

  http = inject(HttpClient);
  getFakeCvs(): Cv[] {
    return this.#cvs;
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cvs);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id === +id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index >= 0) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Ajoute un cv au flux des cvs sélectionnés
   * @param cv : le cv sélectionné
   */
  selectCv(cv: Cv) {
    this.#selectCvSubject$.next(cv);
  }
}
