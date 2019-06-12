import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  private url = '/assets/';
  public myteam : any[] = [];

  getBatsman(): Observable<Team[]>{
    return this.http.get<Team[]>(this.url + 'batsman.json');
  }

  getWk(): Observable<Team[]>{
    return this.http.get<Team[]>(this.url + 'wk.json');
  }

  getBowler(): Observable<Team[]>{
    return this.http.get<Team[]>(this.url + 'bowler.json');
  }

  getAllrounder(): Observable<Team[]>{
    return this.http.get<Team[]>(this.url + 'allrounder.json');
  }

  putInsideTeam(plyr){
    if(this.myteam.length < 11){
      this.myteam.push(plyr);
    }
    else{
      alert("Maximum Number of players selected!")
    }
  }

  getTeam(){
    return this.myteam;
  }
}
