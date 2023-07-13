import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service';
import { IRickAndMortyFavoriteCharacters } from 'src/app/share/enum/character.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoriteCharacterList: IRickAndMortyFavoriteCharacters[] = [];
  constructor(private rickAndMortyService: RickAndMortyServiceService) { }

  ionViewWillEnter() {
    this.rickAndMortyService.loadFavorites();
    this.favoriteCharacterList = this.rickAndMortyService.getFavoriteList();
  }

  ngOnInit() {
  }

}
