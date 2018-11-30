import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';

// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// charts
import { ChartModule } from 'primeng/chart';

// router
import { AppRoutingModule } from './app-routing.module';

// componentes internos
import { DatatableComponent } from './datatable/datatable.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { RestrictAreaComponent } from './restrict-area/restrict-area.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    MainmenuComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    RestrictAreaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    AppRoutingModule,
    // primeng ...
    TableModule, PaginatorModule,
    SlideMenuModule, MenubarModule,
    ButtonModule, InputTextModule, PasswordModule, CardModule,
    PanelModule, ToastModule, KeyFilterModule, InputMaskModule,
    // carts.js ...
    ChartModule,
    // fontawesame
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
