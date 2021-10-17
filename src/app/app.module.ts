import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IntroductionComponent } from './main-page/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
