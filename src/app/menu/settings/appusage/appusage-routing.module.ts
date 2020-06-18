import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppusagePage } from './appusage.page';

const routes: Routes = [
  {
    path: '',
    component: AppusagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppusagePageRoutingModule {}
