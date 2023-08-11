import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/app/feature/auth/auth.service';
import { SnakbarService } from 'src/app/services/snakbar.service';
import { confirmPasswordValidator } from '../signup/confirm-password.validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup = new FormGroup('');
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  isLoading: boolean = false;
  token: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snakeBarService: SnakbarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: confirmPasswordValidator }
    );
    this.token = this.route.snapshot.queryParams['token'];
  }

  resetPassword(): void {
    this.isLoading = true;
    this.authService
      .resetPassword({ password: this.password?.value, token: this.token })
      .subscribe(() => {
        this.isLoading = false;
        this.snakeBarService.openSnakeBar('The password is reset successfully');
        this.router.navigate(['/auth/login']);
      });
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }
}
