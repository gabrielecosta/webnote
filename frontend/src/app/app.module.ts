import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponent } from './core/create/create.component';
import { DetailComponent } from './core/card/detail/detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './core/info/info.component';
import { KanbanComponent } from './core/kanban/kanban.component';
import { ListComponent } from './core/card/list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { NgModule } from '@angular/core';

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
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
