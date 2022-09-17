import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { PhotoComponent } from './photo/photo.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    ResultsComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    InfiniteScrollModule
  ]
})
export class ResultsModule { }
