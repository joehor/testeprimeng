import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// primeng ...
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// componentes internos
import { DatatableComponent } from './datatable/datatable.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule, PaginatorModule,
    SlideMenuModule, MenubarModule,
    ButtonModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
