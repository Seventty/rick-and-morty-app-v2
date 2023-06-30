import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  characterFilter: FormGroup;
  filterFormValue: any;

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

  constructor(private formBuilder: FormBuilder, private rickAndMortyService: RickAndMortyServiceService) {
    this.characterFilter = this.formBuilder.group({
      gender: [''],
      species: [''],
      status: [''],
    });
  }

  ionViewWillEnter() {
    this.rickAndMortyService.loadFilter();
    const filters = JSON.parse(localStorage.getItem('filterOptions') as any);
    if (filters) {
      this.characterFilter.patchValue(filters);
    }
  }

  submitForm(){
    this.filterFormValue = this.characterFilter.value;
    localStorage.setItem('filterOptions', JSON.stringify(this.filterFormValue));
    this.rickAndMortyService.showToast('Filter applyed!', 'success');
  }

  ngOnInit() {
  }

}
