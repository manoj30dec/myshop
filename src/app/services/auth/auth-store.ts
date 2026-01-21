import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../model/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  constructor(private router: Router) {

  }

  access_token: string | null = null;
  refresh_token: string | null = null;
  user: User | null = null;

  setToken(tokens: { access_token: string; refresh_token: string }) {
    this.access_token = tokens.access_token;
    this.refresh_token = tokens.refresh_token;
    if (this.access_token && this.refresh_token) {
      this.router.navigateByUrl('home')
    }
  }

  setUser(user: User | null) {
    this.user = user;
  }
  clear() {
    this.access_token = null;
    this.refresh_token = null;
    this.user = null;
  }
}
