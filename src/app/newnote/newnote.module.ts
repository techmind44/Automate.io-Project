import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewnotePageRoutingModule } from './newnote-routing.module';

import { NewnotePage } from './newnote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewnotePageRoutingModule
  ],
  declarations: [NewnotePage]
})
export class NewnotePageModule {}
