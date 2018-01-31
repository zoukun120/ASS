import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RequestOptions } from '../../../../node_modules/_@angular_http@5.2.2@@angular/http/src/base_request_options';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Md5} from "ts-md5/dist/md5";
import {Router} from '@angular/router';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  myForm : FormGroup;

  constructor(private fb:FormBuilder,private httpClient: HttpClient,private router:Router) { 
    
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      'username':['',[Validators.required]],
      "password":['',[Validators.required]]
    });
  }

  onsubmit(value:string):void{
    var username = value['username'];
    var password = Md5.hashStr(value['password']);
    if((username!=null)&&(password!=null) ){
      var url = 'http://127.0.0.1:8080/user/login';
      var body={loginname:username,password:password};
      var options = new HttpHeaders().set("Content-Type", "application/json");
      this.httpClient.post(url,JSON.stringify(body),{headers:options}).subscribe(
        data => {
          console.log(data);
          console.log(data['jsonData']['user_id']==null);
          var stausLogin = data['jsonData']['user_id'];
          if(stausLogin != null){//进入首页
            this.router.navigateByUrl('home');
          }
        },
        err => {
          console.log('你遇到了跨域问题');
        }
      );
    }
  }
}
