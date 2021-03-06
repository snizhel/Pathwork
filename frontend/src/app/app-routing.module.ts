import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/login/signin/signin/signin.component';

import { BoardComponent } from './Components/board/board.component';

import { RegisterComponent } from './pages/login/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import {AuthGuard} from './Guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path : 'signin',
    component: SigninComponent,
  },
  {
    path:'board/:bid',
    component: BoardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: SidebarComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path:'homeads',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
