import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MingleComponent } from './mingle/mingle.component';
//import { HomeComponent } from './home/home.component';
import { WeeklyReportComponent } from './weeklyreport/weeklyreport.component';

export const routes: Routes = [
  //{path: 'login', component: LoginComponent},
  //{ path: '', component: HomeComponent },
  { path: 'weekly', component: WeeklyReportComponent }
  ,{path: 'mingle', component: MingleComponent},
  {
    path: 'about',
    component: AboutComponent

  }
];
