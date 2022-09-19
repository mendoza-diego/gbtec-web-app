import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MaterialModule } from '../material.module';
import { HeaderModule } from '../header/header.module';
import { ListComponent } from './list/list.component';
import { PhotoModule } from '../photos/photo/photo.module';

@NgModule({
  declarations: [
    ResultsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    InfiniteScrollModule,
    MaterialModule,
    HeaderModule,
    PhotoModule
  ]
})
export class ResultsModule { }
