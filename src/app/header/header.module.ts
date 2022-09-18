import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../material.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SearchModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
