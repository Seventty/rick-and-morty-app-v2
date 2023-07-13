import { Component, Input, OnInit } from '@angular/core';
import { IRickAndMortyCharacter } from 'src/app/share/enum/character.interface';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent  implements OnInit {
  @Input() characterData!: IRickAndMortyCharacter;
  constructor() { }

  ngOnInit() {
    console.log(this.characterData);
  }

}
