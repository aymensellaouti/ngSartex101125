import { Component, inject } from "@angular/core";
import { Credentials } from "../dto/credentials.dto";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  // TODO ajouter la méthode login
  // TODO Créer le service auth avec une méthode login
  // TODO Créer le DTO de la réponse de login
  // TODO Créer le DTO de les credentials
  // TODO modifier le delete en récupérant le token et en
  // l'envoyant dans les headers ou dans les params
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error(`veuillez vérifier vos credentials`);
      },
    });
  }
}
