import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {

  private apiKey: string = 'hJtmiF1k9RhW6iaOUVRAEHJRfQHtWd6H';
  private URL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial]
  }
  constructor(private http: HttpClient){
    if(localStorage.getItem('historial')){
          this._historial = JSON.parse(localStorage.getItem('historial')!)
    }

  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    // Miramos a ver si el valor existe ya en el sidebar para no incluirlo de nuevo
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }


    const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.URL }/search`, {params})
        .subscribe((response) =>{
          this.resultados = response.data;
        });
        localStorage.setItem('resultados', JSON.stringify(this._historial));
  }
}
