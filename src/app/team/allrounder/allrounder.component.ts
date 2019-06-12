import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-allrounder',
  templateUrl: './allrounder.component.html',
  styleUrls: ['./allrounder.component.css']
})
export class AllrounderComponent implements OnInit {

  public allrounder;
  constructor(private team: TeamService) { }

  ngOnInit() {
    this.team.getAllrounder().subscribe( data => this.allrounder = data);
  }

  listClick(index, ar){
    if(this.allrounder[index].active == false){
      this.allrounder[index].active = true;
    }
    else{
      this.allrounder[index].active = false;
    }
    this.team.putInsideTeam(ar);
  }
}
