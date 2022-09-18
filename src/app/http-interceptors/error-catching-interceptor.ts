import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ErrorComponent } from '../error/error.component';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(public dialog: MatDialog) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        this.dialog.open(ErrorComponent, {
          data: { error }
        });

        return throwError(() => new Error(error.message));
      })
    )
  }
}
