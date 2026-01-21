import { inject, Injectable } from '@angular/core';
import { AuthStore } from './auth-store';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';
import { User } from '../../model/user.interface';
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private authStore: AuthStore) {

  }



  async login(crendentials: { email: string, password: string }) {
    try {
      const response = await firstValueFrom(
        this.http.post<LoginResponse>('https://api.escuelajs.co/api/v1/auth/login', crendentials,
          //{ withCredentials: true } //cookeis sent automatically 
        )
      );
      // save token in memory/store
      this.authStore.setToken({
        access_token: response?.access_token,
        refresh_token: response?.refresh_token
      })
    } catch (err) {
      console.error('Login failed', err);
    }
  }

  // check session (ssr safe async)
  async checkSession(): Promise<User | null> {
    try {
      const user = await firstValueFrom(
        this.http.get<User>('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${this.authStore.access_token}`
          }
        }
        )
      )
      this.authStore.setUser(user);
      return user;
    } catch {
      return null;
    }
  }

  // refresh token
  refresh() {
    return this.http.post<any>('https://api.escuelajs.co/api/v1/auth/refresh-token', {
      refreshToken: this.authStore.refresh_token
    })
  }


  logout() {
    this.authStore.clear()
  }

}
