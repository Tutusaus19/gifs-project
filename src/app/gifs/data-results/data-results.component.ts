import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-data-results',
  templateUrl: './data-results.component.html'
})
export class DataResultsComponent {

  get resultados(): Gif[]{
    return this.gifsService.resultados;
  }
    constructor(private gifsService: GifsServicesService){}
}
