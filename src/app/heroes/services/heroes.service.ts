import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interfaces';
import { enviroments } from 'src/enviroments/environment';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = enviroments.baseURL

  constructor(private http: HttpClient) { }

   getHeroes():Observable<Hero[]> {

    return this.http.get<Hero[]>(`${ this.baseUrl}/heroes`)
  }
}
