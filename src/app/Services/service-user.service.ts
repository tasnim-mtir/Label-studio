import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {
    helper=new JwtHelperService()
    private refreshTokenUrl = '/api/refreshToken';
    backendLink='http://localhost:2000'
    isLoggin:BehaviorSubject<boolean>= new BehaviorSubject (false)
    constructor(private http:HttpClient) {

     if(localStorage.getItem("token")){
        this.isLoggin.next(true)
      }else{
        this.isLoggin.next(false)
      }
     }
     userLogout(){
      localStorage.removeItem("token")
      this.isLoggin.next(false)
     }
     userLogIn(token:string){
      localStorage.setItem("token",token)
      this.isLoggin.next(true)
     }

     login(data:any){
      return this.http.post(`${this.backendLink}/api/user/login`,data)
    }

    register(data:any){
      return this.http.post(`${this.backendLink}/api/user/register`,data)
    }

   getToken(){
    return localStorage.getItem('token');
  }

  isAuthenticated(){
    const token = this.getToken()
    if (token && !this.helper.isTokenExpired(token)) {
      return true ;
    } else return false;
  }

  }
