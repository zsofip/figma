import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubmitBookButtonComponent } from './shared/buttons/submit-book-button/submit-book-button.component';
import { NavButtonComponent } from './shared/buttons/nav-button/nav-button.component';
import { IconComponent } from './shared/icons/icon/icon.component';
import { InputComponent } from './shared/inputs/input/input.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitBookButtonComponent,
    NavButtonComponent,
    IconComponent,
    InputComponent,
    LoginFormComponent,
    CarouselComponent,
    CardComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
