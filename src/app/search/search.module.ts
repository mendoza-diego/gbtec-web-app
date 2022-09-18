import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
