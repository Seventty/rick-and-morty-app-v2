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
  constructor(private activatedRoute: ActivatedRoute, private rickAndMortyService: RickAndMortyServiceService) { }

  getCharacter(){
    this.rickAndMortyService.getCharacterById(this.characterId).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err)
      },
    })
  }

  ionViewWillEnter() {
    this.getCharacter();
  }
  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string
  }

}
