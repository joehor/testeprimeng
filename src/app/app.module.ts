import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// primeng ...
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// charts
import { ChartModule } from 'primeng/chart';

// componentes internos
import { DatatableComponent } from './datatable/datatable.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'datatable', component: DatatableComponent },
  { path: 'mainmenu', component: MainmenuComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    MainmenuComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // primeng ...
    TableModule, PaginatorModule,
    SlideMenuModule, MenubarModule,
    ButtonModule, InputTextModule, PasswordModule, CardModule,
    // carts.js ...
    ChartModule,
    // fontawesame
    AngularFontAwesomeModule,
    // rotas ...
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
