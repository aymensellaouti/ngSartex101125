import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { CvComponent } from "./cv/cv/cv.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { SecondComponent } from "./components/second/second.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { Nf404Component } from "./components/nf404/nf404.component";
import { FrontComponent } from "./tempaltes/front/front.component";
import { LoginComponent } from "./auth/login/login.component";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { authGuard } from "./auth/guards/auth.guard";
import { CustomPreloadingStrategy } from "./auth/preloading strategy/custom.preloading-startegy";

const routes: Routes = [
  {
    path: "",
    component: FrontComponent,
    children: [
      { path: "", component: FirstComponent },
      {
        path: "cv",
        data: {
          preload: false,
        },
        loadChildren: () =>
          import("./cv/cv.module").then((module) => module.CvModule),
      },
      { path: "todo", component: TodoComponent },
      { path: "login", component: LoginComponent },
      { path: "word", component: MiniWordComponent },
      { path: "color", component: ColorComponent },
    ],
  },

  //{ path: ":qqchose/:autreChose", component: SecondComponent },
  { path: "**", component: Nf404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
      // preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
