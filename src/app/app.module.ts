import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe} from './filter.pipe';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact/contact.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HomeComponent } from './home/home.component'
import { CarouselModule } from 'ngx-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    PortfolioComponent,
    FilterPipe
  
    
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'portfolio', component: PortfolioComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKACfeJ_H7tMmk4XQAMKxaHYvqDro6leQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
