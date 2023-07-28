import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from './confirm-password.validator';
import { AuthService } from 'src/app/app/feature/auth/auth.service';
import { User } from '../user.model';
import { Token } from '../token.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  signUpForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
      },
      { validators: confirmPasswordValidator }
    );
  }

  signup(): void {
    this.authService.signup(this.signUpForm.value).subscribe((res:{ userDoc: User; tokens: Token })=>{
`     `
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
}
