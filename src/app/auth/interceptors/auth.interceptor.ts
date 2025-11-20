import { inject, Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { APP_CONSTANTES } from "../../config/constantes.config";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log("in interceptor");

    if (this.authService.isAuthenticated()) {
      const headers = new HttpHeaders().set(
        APP_CONSTANTES.authHeader,
        localStorage.getItem(APP_CONSTANTES.token) ?? ""
      );
      const cloneReq = request.clone({ headers });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}

export const AUTH_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
