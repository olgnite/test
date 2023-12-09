import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KekComponent } from './components/kek/kek.component';
import { AppComponent } from './app.component';
import { LolComponent } from './components/lol/lol.component';

const routes: Routes = [
  {
    path: 'kek',
    component: KekComponent
  },
  {
    path: 'lol',
    component: LolComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
