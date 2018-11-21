import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  params = [{
    tabela: '35',
    linha: '101',
    mercado: 'I',
    pag: 1,
    linhasporpagina: 17,
    foradelinha: 0,
    ip: '192.168.0.161',
    reduzido: 0,
    orcamento: 0,
    indice: 100,
    EAN: 0,
    teste: 0,
    desconto: 0,
    idioma: 0
  }];

  private url = 'http://localhost:5200/linhas';

  constructor( private _http: HttpClient ) { }

  async getProdutsbyLine(idLinha) {
    return await this._http.post(this.url, this.params);
  }

}
