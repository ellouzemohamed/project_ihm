import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService implements HttpInterceptor {
  constructor(){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });

    return next.handle(req);
  }
}
