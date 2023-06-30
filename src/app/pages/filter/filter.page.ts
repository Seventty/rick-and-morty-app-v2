import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  genderFilter!: FormGroup;

 /*  speciesFilter = new FormGroup({
    human: new FormControl(''),
    alien: new FormControl(''),
    animal: new FormControl(''),
    unknown: new FormControl(''),
  });

  statusFilter = new FormGroup({
    alive: new FormControl(''),
    dead: new FormControl(''),
    unknown: new FormControl(''),
  }); */

  constructor(private formBuilder: FormBuilder, private rickAndMortyService: RickAndMortyServiceService) { }

  onSubmit(){
    this.rickAndMortyService.showToast('Filter applyed!', 'success');
  }

  ngOnInit() {
    this.genderFilter = this?.formBuilder.group({
      genderOption: [''],
    });
  }

}
