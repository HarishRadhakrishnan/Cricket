import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {

  constructor(private team: TeamService) { }
  public players = [];

  ngOnInit() {
    this.players = this.team.getTeam();
  }

}
