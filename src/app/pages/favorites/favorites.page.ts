import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoriteCharacterList: Array<any> = [];
  constructor(private rickAndMortyService: RickAndMortyServiceService) { }

  ionViewWillEnter() {
    this.rickAndMortyService.loadFavorites();
    this.favoriteCharacterList = this.rickAndMortyService.getFavoriteList();
  }

  ngOnInit() {
  }

}
