import { Component, OnInit } from '@angular/core';
import {Credential, AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential:Credential = {email:"",password:""}
  messageError:string =""
  constructor(private authentication:AuthenticationService) { }

  ngOnInit() {
  }

  loginHandler(){
    let result = this.authentication.login(this.credential)
    if(!result){
      this.messageError = "Email ou senha inválido.";
    }else{
      this.messageError ="";
    }
  }

}
