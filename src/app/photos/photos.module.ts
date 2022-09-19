import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoModule } from './photo/photo.module';
import { HeaderModule } from '../header/header.module';
import { PhotosComponent } from './photos.component';


@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    HeaderModule,
    PhotoModule
  ]
})
export class PhotosModule { }
