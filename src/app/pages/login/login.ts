import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private authService: AuthService) {

  }
  public email: string = "";
  public password: string = ""
  onSubmit(forms: any) {
    this.email = forms.value.email;
    this.password = forms.value.password;
    if (this.email && this.password) {
      const crendentials = {
        email: this.email,
        password: this.password
      }
      this.authService.login(crendentials)
    }


  }

}
