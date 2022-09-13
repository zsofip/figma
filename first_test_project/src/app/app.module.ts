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
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './components/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
]

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
    DashboardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
