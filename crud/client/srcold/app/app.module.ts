import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { customHttpProvider } from './_helpers/custom-http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { NodeCrudModule } from './nodecrud/nodecrud.module';
import { HeaderENComponent } from './header/header-en.component';
import { HeaderTAComponent } from './header/header-ta.component';
import { FooterENComponent } from './footer/footer-en.component';
import { FooterTAComponent } from './footer/footer-ta.component';
import { HomeENComponent } from './home/home-en.component';
import { HomeTAComponent } from './home/home-ta.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
NodeCrudModule
  ],
  providers: [
    SharedService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
HeaderTAComponent,
FooterENComponent,
FooterTAComponent,
HomeENComponent,
HomeTAComponent
  ],
  entryComponents: [
    HeaderENComponent,
    HeaderTAComponent,
    FooterENComponent,
    FooterTAComponent,
    HomeENComponent,
    HomeTAComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }