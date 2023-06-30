import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPage } from './filter.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class FilterPageRoutingModule {}
