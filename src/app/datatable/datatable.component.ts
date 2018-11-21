import { Component, OnInit } from '@angular/core';
import { DatatableService } from './datatable.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  cars = [
    {id: 1, descricao: 'opalla'},
    {id: 2, descricao: 'chevette'},
    {id: 3, descricao: 'fusca'},
    {id: 4, descricao: 'brasilia'},
    {id: 5, descricao: 'passat'},
    {id: 6, descricao: 'santana'},
    {id: 7, descricao: 'fiat 147'},
    {id: 8, descricao: 'monza'},
    {id: 9, descricao: 'kadett'},
  ];

  cols = [
    { field: 'id', header: 'Código' },
    { field: 'descricao', header: 'Descrição' }
  ];

  constructor( private datatableService: DatatableService) { }

  ngOnInit() {
  }

  getData() {
    // this.cars = this.datatableService.getProdutsbyLine(1);
  }

  paginate(event) {
    // event.first = Index of the first record
    // event.rows = Number of rows to display in new page
    // event.page = Index of the new page
    // event.pageCount = Total number of pages
  }

}
