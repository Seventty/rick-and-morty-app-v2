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
        console.log(err)
      },

      complete: () => {
        event?.target?.complete();
      }
    })
  }

  searchCharacter(){
    this.params.page = 1;
    this.rickAndMortyService.getCharacter(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results;
      },

      error: (err: any) => {
        console.log(err)
      },
    })
  }

  ionViewWillEnter() {
    console.log("En el primer componente")
  }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacter();
  }

}
