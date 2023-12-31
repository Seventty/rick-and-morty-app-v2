import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServiceService {

  characterList: Array<any> = [];
  filterOptions: any = {};

  constructor(private httpClient: HttpClient, private toastController: ToastController) { }

  getCharacter(params: any) {
    const getExtraParams = this.getFilters();
    const extraParams = {...params, ...getExtraParams}
    return this.httpClient.get(environment.baseUrl + environment.characterUrl, { params: extraParams });
  }

  getCharacterById(id: string) {
    return this.httpClient.get(environment.baseUrl + environment.characterUrl + id);
  }

  getEpisode(episode: string) {
    return this.httpClient.get(episode);
  }

  setFavorite(character: any, isFavorite: boolean) {
    const newCharacter = {
      isFavorite,
      character
    }

    if (isFavorite) {
      this.characterList.push(newCharacter);
      localStorage.setItem('favorites', JSON.stringify(this.characterList));
    } else {
      this.characterList = this.characterList.filter(charList => charList.character.id !== character.id);
      localStorage.setItem('favorites', JSON.stringify(this.characterList));
    }
  }

  loadFavorites() {
    const favoritesJson = localStorage.getItem('favorites');
    this.characterList = favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  loadFilter(){
    const filterOptions = localStorage.getItem('filterOptions');
    this.filterOptions = filterOptions ? JSON.parse(filterOptions) : {};
  }

  getFavoriteList() {
    return JSON.parse(localStorage.getItem('favorites') as string);
  }

  getFilters() {
    return JSON.parse(localStorage.getItem('filterOptions') as any);
  }


  async showToast(text: string, color: string){
      const toast = await this.toastController.create({
        message: text,
        duration: 1500,
        position: 'bottom',
        color: color,
      });

      await toast.present();
  }
}
