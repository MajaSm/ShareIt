import { NgModule } from '@angular/core';
import { NavigationCancel, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/logedinHomePage/dashboard/dashboard.component';
import { LogedinHomePageComponent } from './components/logedinHomePage/logedin-home-page/logedin-home-page.component';
import { SettingsComponent } from './components/logedinHomePage/settings/settings.component';
import { StatisticsComponent } from './components/logedinHomePage/statistics/statistics.component';
import { TasksComponent } from './components/logedinHomePage/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'logedin-home-page', component: LogedinHomePageComponent},
  {path:'', component: HomePageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
