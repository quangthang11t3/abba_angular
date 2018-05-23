import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment as config } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const loginUrl = config.api_url + '/user/login';

@Injectable()
export class LoginService {

    constructor( private http: HttpClient ) { 
    }

    login(username: string, password: string): Observable<Response> {
        return this.http.post(loginUrl, JSON.stringify({
            username: username,
            password: password
        }) , httpOptions).pipe(
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