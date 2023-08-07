import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SnakbarService } from './services/snakbar.service';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(private snakBarService: SnakbarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          console.log(error);
        } else {
          errorMessage = error.error.message;
          this.snakBarService.openSnakeBar(errorMessage);
        }
        return throwError(error);
      })
    );
  }
}
