import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { NewPostComponent } from './news/new-post/new-post.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { TrainingComponent } from './training/training.component';
import { PostTrainingComponent } from './training/post-training/post-training.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { AdminsComponent } from './admins/admins.component';
import { CreateAdminComponent } from './admins/create-admin/create-admin.component';
import { EditTrainingComponent } from './training/edit-training/edit-training.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { NewFacultyComponent } from './faculties/new-faculty/new-faculty.component';
import { EditFacultyComponent } from './faculties/edit-faculty/edit-faculty.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { ShowCoursesComponent } from './training/show-courses/show-courses.component';
import { EditNewsComponent } from './news/edit-news/edit-news.component';


const appRoutes : Routes = [

  { path: '', redirectTo: '/faculties', pathMatch: 'full' },

  {path:'login' , component: LoginComponent}, 

  {path:'admin' , component: AdminsComponent,canActivate:[AuthGuardService]}, 
    {path:'admin/create', component:CreateAdminComponent,canActivate:[AuthGuardService]},
    {path:'admin/edit/:adminID', component:EditAdminComponent,canActivate:[AuthGuardService]},
    

  {path:'training' , component: TrainingComponent, canActivate:[AuthGuardService]},
    {path:'training/create/:id', component:PostTrainingComponent,canActivate:[AuthGuardService]},
    {path:'training/new', component:NewTrainingComponent,canActivate:[AuthGuardService]},
    {path:'training/show-courses/:id', component:ShowCoursesComponent,canActivate:[AuthGuardService]},
    
    
  
  {path:'course' , component: CoursesComponent,canActivate:[AuthGuardService]},
    {path:'course/create', component:CreateCourseComponent},
    {path:'course/edit/:code', component:EditCourseComponent},
    
 
  {path:'news' , component: NewsComponent},
  {path:'news/create' , component: NewPostComponent},
  {path:'news/edit/:id' , component: EditNewsComponent},
  
  
  {path:'training/edit/:code' , component: EditTrainingComponent,canActivate:[AuthGuardService]},

  {path:'faculties' , component: FacultiesComponent,canActivate:[AuthGuardService]},
  {path:'faculties/new' , component: NewFacultyComponent,canActivate:[AuthGuardService]},
  {path:'faculties/edit/:faculId' , component: EditFacultyComponent,canActivate:[AuthGuardService]},

  {path:'appointments' , component: AppointmentsComponent,canActivate:[AuthGuardService]},
  
  
  
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewPostComponent,
    CoursesComponent,
    CreateCourseComponent,
    TrainingComponent,
    PostTrainingComponent,
    FacultiesComponent,
    AdminsComponent,
    CreateAdminComponent,
    EditTrainingComponent,
    EditAdminComponent,
    NewFacultyComponent,
    EditFacultyComponent,
    LoginComponent,
    EditCourseComponent,
    AppointmentsComponent,
    ResetPasswordComponent,
    NewTrainingComponent,
    ShowCoursesComponent,
    EditNewsComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
