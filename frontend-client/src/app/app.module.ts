import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-details/employee-list/employee-list.component';
import { HeaderComponent } from './employee-details/header/header.component';
import { EmployeeFormComponent } from './employee-details/employee-form/employee-form.component';
import { UserAttemptComponent } from './user-attempt/user-attempt.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: EmployeeDetailsComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent },
  { path: 'attempt', component: UserAttemptComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    HeaderComponent,
    EmployeeFormComponent,
    UserAttemptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
