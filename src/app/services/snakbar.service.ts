import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnakbarService {
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snakeBar: MatSnackBar) {}

  openSnakeBar(message: string): void {
    this.snakeBar.open(message, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }
}
