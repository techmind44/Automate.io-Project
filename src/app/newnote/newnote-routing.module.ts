import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewnotePage } from './newnote.page';

const routes: Routes = [
  {
    path: '',
    component: NewnotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewnotePageRoutingModule {}
