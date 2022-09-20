import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ResponseHeaderInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap((httpEvent: HttpEvent<any>) => {
        if (httpEvent.type === 0) {
          return;
        }

        if (httpEvent instanceof HttpResponse) {
          if (httpEvent.headers.has('x-ratelimit-remaining')) {
            this._snackBar.open(`Unsplash API Limit Remaining: ${httpEvent.headers.get('x-ratelimit-remaining')}/50`, "", {
              duration: 2000,
            });
          }
        }
      })
    );
  }
}
