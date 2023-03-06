import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Board} from "../models/Board.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularKanban';

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getBoards();
  }

  public boards: Board[] = [];

  getBoards(){
    this.api.getBoards().subscribe(response =>{
      this.boards = response;
    })
  }
}
