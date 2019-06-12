import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-wk',
  templateUrl: './wk.component.html',
  styleUrls: ['./wk.component.css']
})
export class WkComponent implements OnInit {

  public wk;
  constructor(private team: TeamService) { }

  ngOnInit() {
    this.team.getWk().subscribe( data => this.wk = data);
  }

  listClick(index, wkeeper){
    if(this.wk[index].active == false){
      this.wk[index].active = true;
    }
    else{
      this.wk[index].active = false;
    }
    this.team.putInsideTeam(wkeeper);
  }
}
