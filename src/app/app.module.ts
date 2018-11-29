import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';

// primeng ...
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';

// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// charts
import { ChartModule } from 'primeng/chart';

// componentes internos
import { DatatableComponent } from './datatable/datatable.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RestrictAreaComponent } from './restrict-area/restrict-area.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'datatable', component: DatatableComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'restrict', component: RestrictAreaComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    MainmenuComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    RestrictAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    // primeng ...
    TableModule, PaginatorModule,
    SlideMenuModule, MenubarModule,
    ButtonModule, InputTextModule, PasswordModule, CardModule,
    PanelModule, ToastModule,
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
