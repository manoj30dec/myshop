import { inject, Injectable } from '@angular/core';
import { AuthStore } from './auth-store';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';
import { User } from '../../model/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private authStore: AuthStore) {

  }

  // async checkSession(): Promise<void> {
  //   try {
  //     const user = await firstValueFrom(this.http.get<User | null>('https://api.escuelajs.co/api/v1/auth/profile'));
  //     console.log(user)
  //     this.authStore.setUser(user)
  //   } catch {
  //     this.authStore.setUser(null)
  //   }
  // }
  checkSession(): boolean {
    const user = null;
    this.http.get<User | null>('https://api.escuelajs.co/api/v1/auth/profile').subscribe((data) => {
      console.log(data)
    })
    return true;
  }

  async login(crendentials: { email: string, password: string }) {
    try {
      const response = await firstValueFrom(
        this.http.post('https://api.escuelajs.co/api/v1/auth/login', crendentials)
      );
      console.log('Login success', response);
    } catch (err) {
      console.error('Login failed', err);
    }
  }

  // logout() {
  //   // await firstValueFrom(
  //   //   this.http.post()
  //   // )
  //   this.authStore.clear()
  // }

}
