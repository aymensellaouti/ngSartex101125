import { inject, Injectable } from "@angular/core";
import { LoginResponseDto } from "./dto/login-response.dto";
import { APP_CONSTANTES } from "../config/constantes.config";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../config/app-api.config";
import { Observable, tap } from "rxjs";
import { Credentials } from "./dto/credentials.dto";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private http = inject(HttpClient);
  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap((response) => {
        localStorage.setItem(APP_CONSTANTES.token, response.id);
      })
    );
  }

  logout() {
    localStorage.removeItem(APP_CONSTANTES.token);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(APP_CONSTANTES.token);
  }
}
