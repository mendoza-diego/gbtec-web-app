import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { PhotoComponent } from './photo/photo.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PhotoDetailsComponent } from './photo/photo-details/photo-details.component';
import { BlurhashModule } from './photo/blurhash/blurhash.module';
import { MaterialModule } from '../material.module';
import { HeaderModule } from '../header/header.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ResultsComponent,
    PhotoComponent,
    PhotoDetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    InfiniteScrollModule,
    BlurhashModule,
    MaterialModule,
    HeaderModule,
  ]
})
export class ResultsModule { }
