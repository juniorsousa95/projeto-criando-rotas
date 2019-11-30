import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private router:Router) { }

  login(credential:Credential):boolean{
    let {email,password} = credential;
    if(email ==='joao@teste.com.br' && password ==='12345678'){
      let user = {id:1, name: 'Joao da silva', email, password};
      this.setUser(user);
      this.router.navigate(['/pagina3'])
      return true;
    }
    return false;
  }

  private setUser(user:User):void{
    if(user){
      let localStorage = window.localStorage;
      localStorage.setItem('CURRENT_USER',JSON.stringify(user));
    }
  }

  getUser():User | null{
    let localStorage = window.localStorage;
    const data = localStorage.getItem('CURRENT_USER');
    if(data && data.trim().length > 0){
      return JSON.parse(data);
    }
    return null;
  }

  isAuthenticated(){
    return this.getUser() != null;
  }

  logout(){
    let localStorage = window.localStorage;
    localStorage.removeItem('CURRENT_USER');
    this.router.navigateByUrl('/login');
  }


  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot):boolean{
    if(state.url === '/pagina3'){
      if(this.isAuthenticated()){
        return true;
      }
      this.router.navigateByUrl('/login')
      return false;
    }
    return true;
  }
}

export interface Credential{
  email:string
  password:string
}

export interface User{
  id?:number
  name:string
  email:string
  password:string
}