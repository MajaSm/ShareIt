import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgToastModule } from 'ng-angular-popup';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogedinHomePageComponent } from './components/logedinHomePage/logedin-home-page/logedin-home-page.component';
import { DashboardComponent } from './components/logedinHomePage/dashboard/dashboard.component';
import { StatisticsComponent } from './components/logedinHomePage/statistics/statistics.component';
import { SettingsComponent } from './components/logedinHomePage/settings/settings.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BodyComponent } from './components/logedinHomePage/body/body.component';
import { TasksComponent } from './components/logedinHomePage/tasks/tasks.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    LogedinHomePageComponent,
    DashboardComponent,
    StatisticsComponent,
    SettingsComponent,
    NavigationComponent,
    BodyComponent,
    TasksComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgToastModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
