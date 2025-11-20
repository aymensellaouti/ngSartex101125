import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
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
import { TestNgStyleComponent } from "./directives/test-ng-style/test-ng-style.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { AmpouleComponent } from "./directives/ampoule/ampoule.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { RainbowDirective } from "./directives/rainbow.directive";
import { Btc2usdPipe } from "./pipes/btc2usd.pipe";
import { TodoComponent } from "./todo/todo/todo.component";
import { WeekTodoComponent } from "./todo/week-todo/week-todo.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { Nf404Component } from "./components/nf404/nf404.component";
import { FrontComponent } from "./tempaltes/front/front.component";
import { AdminComponent } from "./tempaltes/admin/admin.component";
import { TestFormComponent } from "./form/test-form/test-form.component";
import { LoginComponent } from "./auth/login/login.component";
import { TestObservableComponent } from "./rxjs/test-observable/test-observable.component";
import { SliderComponent } from "./rxjs/slider/slider.component";
import { AUTH_INTERCEPTOR_PROVIDER } from "./auth/interceptors/auth.interceptor";
import { CvModule } from "./cv/cv.module";
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

    // Todo
    TodoComponent,
    WeekTodoComponent,

    TestNgStyleComponent,
    MiniWordComponent,
    AmpouleComponent,
    HighlightDirective,
    RainbowDirective,
    NavbarComponent,
    Nf404Component,
    FrontComponent,
    AdminComponent,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],
  providers: [AUTH_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
