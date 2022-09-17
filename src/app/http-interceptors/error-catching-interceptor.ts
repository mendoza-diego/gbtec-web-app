import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        let title;

        if (error.status === 404) {
          title = "Página No Encontrada";
        } else if (error.status >= 500 && error.status < 600) {
          title = "Error Interno";
        }

        console.log(title, error);
        //TODO show error
        return throwError(() => new Error(error.message));
      })
    )
  }
}
