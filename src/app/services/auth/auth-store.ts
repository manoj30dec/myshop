import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../model/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private _user = signal<User | null>(null);
  user = this._user.asReadonly();
  isLoggedIn = computed(() => this._user() !== null);
  setUser(user: User | null) {
    this._user.set(user);
  }
  clear() {
    this._user.set(null);
  }
}
