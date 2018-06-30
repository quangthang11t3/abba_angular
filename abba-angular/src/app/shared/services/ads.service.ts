import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment as config } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdsService {

    private httpOptions = {
    };

    constructor( 
        private http: HttpClient,
        private authService : AuthService ) {
        let user = this.authService.getUser();
        console.log('user:', user);
        this.httpOptions['headers'] = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'x-access-token': user['token']
        })
    }

    checkApp(type: Number, appId: string): Observable<Response>{
        let url = config.api_url;
        if(type === 0){
            url +='/app/android';
        } else {
            url += '/app/ios';
        }

        console.log('httpOptions:', this.httpOptions);
        return this.http.post(url, JSON.stringify({
            id: appId
        }), this.httpOptions).pipe(
            tap((response: Response)=>{
                return response;
            }),
            catchError(this.handleError)
        );
    }

    checkWebUrl(link: string): Observable<Response>{
        let url = config.api_url + '/web/check';
        return this.http.post(url, JSON.stringify({
            url: link
        }), this.httpOptions).pipe(
            tap((response: Response)=>{
                return response;
            }),
            catchError(this.handleError)
        );
    }

    createAds(ads: any): Observable<Response>{
        let url = config.api_url + '/ads';
        console.log('ads:', ads);
        return this.http.post(url, JSON.stringify(ads), this.httpOptions).pipe(
            tap((response: Response)=>{
                return response;
            }),
            catchError(this.handleError)
        );
    }
    
    private handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}