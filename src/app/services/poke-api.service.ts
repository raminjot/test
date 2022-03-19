import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PokeApiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(index: any){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
