import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatsmanComponent } from './batsman/batsman.component';
import { WkComponent } from './wk/wk.component';
import { BowlerComponent } from './bowler/bowler.component';
import { AllrounderComponent } from './allrounder/allrounder.component';
import { MyteamComponent } from './myteam/myteam.component';

@NgModule({
  declarations: [BatsmanComponent, WkComponent, BowlerComponent, AllrounderComponent, MyteamComponent],
  imports: [
    CommonModule
  ]
})
export class TeamModule { }
