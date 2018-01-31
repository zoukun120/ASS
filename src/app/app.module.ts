import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule,JsonpModule } from '@angular/http'
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Validators } from '../../node_modules/_@angular_forms@5.2.2@@angular/forms/src/validators';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: '首页' }
  }];
// @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用。
@NgModule({
  declarations: [
    AppComponent,LoginFormComponent,HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]//插入index.html宿主页面。
})
export class AppModule { }
