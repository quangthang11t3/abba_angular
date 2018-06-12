import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment as config } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { AuthService } from '../services/auth.service';

let httpOptions = {
};

@Injectable()
export class AdsService {

    constructor( 
        private http: HttpClient,
        private authService : AuthService ) {
        let user = this.authService.getUser();
        httpOptions['headers'] = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'x-access-token': user['token'],
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*'
        })
    }

    checkApp(type: Number, appId: string): Observable<Response>{
        let url = config.api_url;
        if(type === 0){
            url +='/app/android';
        } else {
            url += '/app/ios';
        }
        return this.http.post(url, JSON.stringify({
            id: appId
        }), httpOptions).pipe(
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