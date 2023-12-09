import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KekComponent } from './components/kek/kek.component';
import { LolComponent } from './components/lol/lol.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    KekComponent,
    LolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
