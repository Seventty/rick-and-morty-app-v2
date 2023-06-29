import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServiceService {

  constructor(private httpClient: HttpClient) { }

  getCharacter(params: any) {
    return this.httpClient.get(environment.baseUrl + environment.characterUrl, { params });
  }

  getCharacterById(id: string){
    return this.httpClient.get(environment.baseUrl + environment.characterUrl + id);
  }

  getEpisode(episode: string){
    return this.httpClient.get(episode);
  }
}
