import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  characterId: string = ''
  character: any;
  characterEpisodes: Array<any> = [];
  isFavorite: boolean = false;
  favoriteCharacterList: any;
  constructor(private activatedRoute: ActivatedRoute, private rickAndMortyService: RickAndMortyServiceService) { }

  getCharacter() {
    this.rickAndMortyService.getCharacterById(this.characterId).subscribe({
      next: (res: any) => {
        this.character = res;
        this.getEpisode();
        this.isFavoriteMethod(this.character);
      },
      error: (err: any) => {
      },
    })
  }

  ionViewWillEnter() {
    this.getCharacter();
    this.rickAndMortyService.loadFavorites();
  }

  isFavoriteMethod(character: any){
    this.favoriteCharacterList = this.rickAndMortyService.getFavoriteList();
    const isFavoriteAlready = this.favoriteCharacterList.some((characterList: any) => characterList?.character?.id === character?.id);
    this.isFavorite = isFavoriteAlready;
  }

  handleFavorites(){
    if (this.isFavorite) {
      this.isFavorite = false;
      this.rickAndMortyService.setFavorite(this.character, this.isFavorite);
      this.rickAndMortyService.showToast('Removed from favorites!', 'danger');
    }else {
      this.isFavorite = true;
      this.rickAndMortyService.setFavorite(this.character, this.isFavorite);
      this.rickAndMortyService.showToast('Added to favorites!', 'success');
    }
  }

  getEpisode() {
    this.character.episode.forEach((episode: any) => {
      this.rickAndMortyService.getEpisode(episode).subscribe({
        next: (res: any) => {
          this.characterEpisodes.push(res);
        },
        error: (err: any) => {
        },
      })
    });
  }

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string
  }

}
