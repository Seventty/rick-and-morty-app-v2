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
  constructor(private activatedRoute: ActivatedRoute, private rickAndMortyService: RickAndMortyServiceService) { }

  getCharacter() {
    this.rickAndMortyService.getCharacterById(this.characterId).subscribe({
      next: (res: any) => {
        this.character = res;
        this.getEpisode();
        console.log(res);
      },
      error: (err: any) => {
      },
    })
  }

  ionViewWillEnter() {
    this.getCharacter();
  }

  getEpisode() {
    this.character.episode.forEach((episode: any) => {
      this.rickAndMortyService.getEpisode(episode).subscribe({
        next: (res: any) => {
          this.characterEpisodes.push(res);
          console.log(res);
        },
        error: (err: any) => {
          console.log(err)
        },
      })
    });
    /* this.rickAndMortyService.getEpisode(episode).subscribe({
      next: (res: any) => {
        this.characterEpisodes.push(res.results)
        console.log(this.characterEpisodes)
      },
      error: (err: any) => {
        console.log(err)
      },
    }) */
  }
  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string
  }

}
