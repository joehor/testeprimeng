import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  items: MenuItem[];
  search: string;

  // TODO: adicionar o icone de bloqueio nos menus quando não estiver logado
  ngOnInit() {
    this.items = [
    {
        label: 'Home',
        routerLink: ['/home']
    },
    {
          label: 'Cadastros',
          items: [{
                  label: 'Novo',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'DataTable', routerLink: ['datatable'], icon: 'pi pi-lock pi-lg'},
              {label: 'Login', routerLink: ['login']},
              {label: 'Página 404', routerLink: ['**']}
          ]
       },
       {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
       }
    ];
  }

  searchMenu() {
      console.log(this.search);
  }

}
