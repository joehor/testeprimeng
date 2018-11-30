import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../auth.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  @Input() recLogado;

  constructor(
    private auth: AuthService,
    private activeRoute: ActivatedRoute
    ) {
      this.activeRoute.url.subscribe((url: UrlSegment[]) => console.log('Url atual:' + url[0].path));
     }

  items: MenuItem[];
  search: string;

  // TODO: adicionar o icone de bloqueio nos menus quando não estiver logado
  ngOnInit() {
    this.items = [
    {
        label: 'Home',
        routerLink: ['home']
    },
    {
      label: 'Dashboard',
      routerLink: ['dashboard']
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
              {label: 'DataTable', routerLink: ['datatable']},
              {label: 'Login', routerLink: ['login']},
              {label: 'Página 404', routerLink: ['**']}
          ]
       }
    ];
  }

  searchMenu() {
      console.log(this.search);
  }

  setIconBlock() {
    if (!this.auth.isLoggedIn) {
      return '';
    } else {
      return 'pi pi-lock pi-lg';
    }
  }

}
