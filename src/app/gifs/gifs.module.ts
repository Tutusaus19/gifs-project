import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { DataResultsComponent } from './data-results/data-results.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    DataResultsComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
