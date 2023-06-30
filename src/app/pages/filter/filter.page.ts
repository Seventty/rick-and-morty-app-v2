import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(private toastController: ToastController) { }
  async showToast(){
    const toast = await this.toastController.create({
      message: 'Filter applyed!',
      duration: 1500,
      position: 'bottom',
      color: 'success',
    });

    await toast.present();
  }
  ngOnInit() {

  }

}
