import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PhotoDetailsComponent } from './photo/photo-details/photo-details.component';
import { ResultsComponent } from './results.component';

const routes: Routes = [
  {
    path: '', component: ResultsComponent,
    children: [
      {
        path: 'photos',
        component: ListComponent,
      },
      {
        path: 'photos/:id',
        component: PhotoDetailsComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
