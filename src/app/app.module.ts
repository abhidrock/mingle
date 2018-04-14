import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WeeklyReportComponent } from './weeklyreport/weeklyreport.component';
import { BsucmodelComponent } from './weeklyreport/bsucmodel.component';
import { NipmodelComponent } from './weeklyreport/nipmodel.component';
import { OthermodelComponent } from './weeklyreport/othermodel.component';
import { routes } from './app.routes';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {CarouselComponent} from "./mingle/carousel.component";
import { MingleComponent } from './mingle/mingle.component';
import { MainComponent } from './main/main.component';

const appRoutes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', 
    component: MainComponent,
    children: [
      
    ]
  }
];


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, CoreModule, RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  declarations: [AppComponent, AboutComponent, LoginComponent,HomeComponent,WeeklyReportComponent,MingleComponent,CarouselComponent,BsucmodelComponent,NipmodelComponent,OthermodelComponent],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
