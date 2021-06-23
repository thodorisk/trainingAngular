import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    localStorage.setItem('TOKEN', 'token');
  }

  logout() {
    localStorage.removeItem('TOKEN');
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('TOKEN') !== null;
  }
}
