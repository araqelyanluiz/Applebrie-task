import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {Router} from "@angular/router";


@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(error => {
      if(error instanceof HttpErrorResponse && error.status==404){
        this.router.navigateByUrl('/not-found', {replaceUrl: true});
      }
      return throwError(error);
    }));
  }
}
