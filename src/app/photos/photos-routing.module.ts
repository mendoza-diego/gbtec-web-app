import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsComponent } from './photo/photo-details/photo-details.component';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: '', component: PhotosComponent,
    children: [
      {
        path: ':id',
        component: PhotoDetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
