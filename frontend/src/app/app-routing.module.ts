import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './core/create/create.component';
import { HomeComponent } from './core/home/home.component';
import { InfoComponent } from './core/info/info.component';
import { KanbanComponent } from './core/kanban/kanban.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'info/:id', component: InfoComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
