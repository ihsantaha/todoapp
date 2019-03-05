import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';

import { HttpInterceptorBasicAuthService } from './services/http/http-interceptor-basic-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    WelcomeComponent,
    TodoListComponent,
    FooterComponent,
    ErrorComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
