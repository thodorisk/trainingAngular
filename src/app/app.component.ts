import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { I_Customer } from './customer';
import { CustomerService } from './customer.service';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router) {

  }

  isLogoutButtonVisible(): boolean {
    return this.auth.isUserLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
