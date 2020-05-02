import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  navigate: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }

  login(params) {
    this.http.get('assets/static.json')
    .pipe(filter((res: any) => {
      if (params.uname === res.username && params.pwd === res.password) {
        localStorage.setItem('userLogged', '{uname: params.uname, pwd: params.pwd}');
       return true;
      } else {
        return false;
      }
    }),
    switchMap(() => this.http.get('https://randomuser.me/api/0.8/?results=20'))
    )
    .subscribe((res: any) => {
      localStorage.setItem('userList', JSON.stringify(res.results));
      this.router.navigate(['home']);      
    });
  }

  navigation(route) {
    this.navigate.next(route);
  }
  
  routeChanged() {
    return this.navigate.asObservable();
  }

  logOut() {
    
    localStorage.removeItem('userLogged');
    localStorage.removeItem('userList');
    localStorage.removeItem('newUser');
    this.router.navigate(['login']);
  }

  isLogged() {
    return localStorage.getItem('userLogged');
  }

}

