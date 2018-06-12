import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment as config } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

let httpOptions = {
};

const depositUrl = config.api_url + '/payment/request';

@Injectable()
export class LocalBankService {

    constructor( private http: HttpClient,
    private authService: AuthService  ) {
        let user = this.authService.getUser();
        httpOptions['headers'] = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-access-token': user['token'],
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
            'Access-Control-Allow-Origin': '*'
        })
    }

    deposit(money: string): Observable<Response> {
        console.log('httpOptions:', httpOptions);
        return this.http.post(depositUrl, JSON.stringify({
            money: money
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