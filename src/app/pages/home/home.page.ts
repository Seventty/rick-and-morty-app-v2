import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  characters: Array<any> = [];
  params: any = {}

  constructor(private rickAndMortyService: RickAndMortyServiceService) { }

  getCharacter(event?: any){
    this.params.page++;
    this.rickAndMortyService.getCharacter(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
      },

      error: (err: any) => {
      },

      complete: () => {
        event?.target?.complete();
      }
    })
  }

  ionViewWillEnter() {
    this.searchCharacter();
  }

  searchCharacter(){
    this.params.page = 0;
    this.rickAndMortyService.getCharacter(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results;
      },

      error: (err: any) => {
      },
    })
  }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacter();
  }

}
