import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Board} from "../models/Board.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private baseUri: string = "assets/data.json"

  getBoards(){
    return this.http.get<any>(`${this.baseUri}`).pipe(
      map(response => response.boards)
    );
  }
}
