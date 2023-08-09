import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app/feature/auth/auth.service';
import { SnakbarService } from 'src/app/services/snakbar.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup = new FormGroup({});
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snakeBarService: SnakbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendEmail(): void {
    this.isLoading = true;
    this.authService
      .forgotPassword(this.forgotPasswordForm.value)
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/auth/login']);
        this.snakeBarService.openSnakeBar(
          'An email is send to this email please, check your spam folder'
        );
      });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }
}
