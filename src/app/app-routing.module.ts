import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { CvComponent } from "./cv/cv/cv.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { SecondComponent } from "./components/second/second.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { Nf404Component } from "./components/nf404/nf404.component";
import { FrontComponent } from "./tempaltes/front/front.component";

const routes: Routes = [
  { path: "", component: FirstComponent },
  {
    path: "",
    component: FrontComponent,
    children: [
      { path: "todo", component: TodoComponent },
      {
        path: "cv",
        children: [
          { path: "", component: CvComponent },
          { path: ":id", component: DetailsCvComponent },
        ],
      },
      { path: "word", component: MiniWordComponent },
      { path: "color", component: ColorComponent },
    ],
  },

  //{ path: ":qqchose/:autreChose", component: SecondComponent },
  { path: "**", component: Nf404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
