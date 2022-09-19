import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ResultsComponent } from './results.component';

const routes: Routes = [
  {
    path: '', component: ResultsComponent,
    children: [
      {
        path: 'photos',
        component: ListComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
