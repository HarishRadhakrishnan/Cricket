import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatsmanComponent } from '../team/batsman/batsman.component';
import { WkComponent } from '../team/wk/wk.component';
import { BowlerComponent } from '../team/bowler/bowler.component';
import { AllrounderComponent } from '../team/allrounder/allrounder.component';

const routes: Routes = [
  { path:'batsman', component: BatsmanComponent},
  { path:'wk', component: WkComponent},
  { path:'bowler', component: BowlerComponent},
  { path:'allrounder', component: AllrounderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
