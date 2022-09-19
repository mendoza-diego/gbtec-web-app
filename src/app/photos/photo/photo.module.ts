import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { BlurhashModule } from './blurhash/blurhash.module';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    BlurhashModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    PhotoComponent,
    PhotoDetailsComponent
  ]
})
export class PhotoModule { }
