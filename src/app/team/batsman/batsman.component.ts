import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-batsman',
  templateUrl: './batsman.component.html',
  styleUrls: ['./batsman.component.css']
})
export class BatsmanComponent implements OnInit {
  public batsman;
  public selectedItem: boolean = false;
  constructor(private team: TeamService) { }

  ngOnInit() {
    this.team.getBatsman().subscribe( data => this.batsman = data);
  }

  listClick(index, batsman){
    if(this.batsman[index].active == false){
      this.batsman[index].active = true;
    }
    else{
      this.batsman[index].active = false;
    }
    this.team.putInsideTeam(batsman);
  }

}
