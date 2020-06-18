import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppusagePageRoutingModule } from './appusage-routing.module';

import { AppusagePage } from './appusage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppusagePageRoutingModule
  ],
  declarations: [AppusagePage]
})
export class AppusagePageModule {}
