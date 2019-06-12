import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-bowler',
  templateUrl: './bowler.component.html',
  styleUrls: ['./bowler.component.css']
})
export class BowlerComponent implements OnInit {

  public bowler;
  constructor(private team: TeamService) { }

  ngOnInit() {
    this.team.getBowler().subscribe( data => this.bowler = data);
  }

  listClick(index, bowler){
    if(this.bowler[index].active == false){
      this.bowler[index].active = true;
    }
    else{
      this.bowler[index].active = false;
    }
    this.team.putInsideTeam(bowler);
  }
}
