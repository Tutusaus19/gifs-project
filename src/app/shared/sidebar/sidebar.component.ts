import { Component } from '@angular/core';
import { GifsServicesService } from 'src/app/gifs/services/gifs-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  get historial(){
    return this.gifsService.historial;
  }
  constructor(private gifsService: GifsServicesService){}

  buscar(termino: string){
    this.gifsService.buscarGifs(termino);
  }

}
