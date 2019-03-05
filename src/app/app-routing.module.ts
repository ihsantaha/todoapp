import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';

import { RouteGuardService } from './services/route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome/:name',
        component: WelcomeComponent,
        canActivate: [RouteGuardService]
    },
    {
        path: 'todo-list',
        component: TodoListComponent,
        canActivate: [RouteGuardService]
    },
    {
        path: 'todo-list/:id',
        component: TodoComponent,
        canActivate: [RouteGuardService]
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [RouteGuardService]
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
