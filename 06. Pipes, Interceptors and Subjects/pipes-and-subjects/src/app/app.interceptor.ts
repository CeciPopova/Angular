import { Injectable, Provider } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { API_URL } from './constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // return next.handle(req);

    let request = req;
    if (req.url.startsWith('/api')) {
      request = req.clone({
        url: req.url.replace('/api', API_URL),
      });
    }

    return next.handle(request).pipe(
      tap((req) => {
        if (req instanceof HttpRequest) {
          console.log(request);
        }
      }),
      catchError((err) => {
        
        if (err.status === 0) {
            console.error(`Error from interceptor: ${JSON.stringify(err)}`);
            return EMPTY;
        }
        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor
};
