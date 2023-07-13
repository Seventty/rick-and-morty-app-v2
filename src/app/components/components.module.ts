import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule, IonicModule
  ],
  exports: [
    CharacterComponent
  ],
  declarations: [CharacterComponent]
})
export class ComponentsModule { }
