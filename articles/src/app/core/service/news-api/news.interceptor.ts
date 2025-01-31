import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()

export class NewsInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(request.method === 'GET' && request.url.indexOf(environment.newsURL) > -1) {
      return next.handle(request);
    }
  }
}
