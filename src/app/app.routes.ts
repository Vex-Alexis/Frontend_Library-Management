import { Routes } from '@angular/router';
import { LoginComponent } from './core/authentication/components/login/login.component';
import { BookListComponent } from './modules/book/components/book-list/book-list.component'
import { BookFormComponent } from './modules/book/components/book-form/book-form.component'
import { UserListComponent } from './modules/user/components/user-list/user-list.component'
import { UserFormComponent } from './modules/user/components/user-form/user-form.component'

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'book-list', component: BookListComponent},
    { path: 'book-form', component: BookFormComponent},
    { path: 'user-list', component: UserListComponent},
    { path: 'user-form', component: UserFormComponent},
];

//export const routingComponents = [LoginComponent, BookListComponent, BookFormComponent, UserListComponent, UserFormComponent]