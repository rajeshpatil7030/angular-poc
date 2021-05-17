import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponentComponent } from './components/users/users-component/users-component.component';
import { WellKnownListComponent } from './components/well-known/well-known-list/well-known-list.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';


const routes: Routes = [
  { path: 'users', component: UsersComponentComponent },
  { path: 'well-known', component: WellKnownListComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
