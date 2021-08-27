import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponent } from './core/create/create.component';
import { DetailComponent } from './core/card/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './core/info/info.component';
import { ListComponent } from './core/card/list/list.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { KanbanComponent } from './core/kanban/kanban.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    InfoComponent,
    NavbarComponent,
    CreateComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
