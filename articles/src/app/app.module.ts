import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NewsInterceptor } from './core/service/news.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { SearchComponent } from './layout/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    ErrorPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:NewsInterceptor, multi:true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
