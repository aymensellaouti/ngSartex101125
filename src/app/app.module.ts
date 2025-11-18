import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { FormsModule } from "@angular/forms";
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { PereComponent } from "./commInterCompo/pere/pere.component";
import { FilsComponent } from "./commInterCompo/fils/fils.component";
import { CvComponent } from "./cv/cv/cv.component";
import { CvListComponent } from "./cv/cv-list/cv-list.component";
import { CvItemComponent } from "./cv/cv-item/cv-item.component";
import { CvCardComponent } from "./cv/cv-card/cv-card.component";
import { TestNgStyleComponent } from "./directives/test-ng-style/test-ng-style.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { AmpouleComponent } from "./directives/ampoule/ampoule.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { RainbowDirective } from "./directives/rainbow.directive";
import { Btc2usdPipe } from "./pipes/btc2usd.pipe";
import { DefaultImagePipe } from "./cv/pipes/default-image.pipe";
import { LoggerService } from "./services/logger.service";
import { SayHelloService } from "./services/say-hello.service";
import { TodoComponent } from "./todo/todo/todo.component";
import { WeekTodoComponent } from "./todo/week-todo/week-todo.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmbaucheComponent } from "./cv/embauche/embauche.component";
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    CvListComponent,
    CvItemComponent,
    CvCardComponent,
    TestNgStyleComponent,
    MiniWordComponent,
    AmpouleComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    DefaultImagePipe,
    TodoComponent,
    WeekTodoComponent,
    EmbaucheComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
