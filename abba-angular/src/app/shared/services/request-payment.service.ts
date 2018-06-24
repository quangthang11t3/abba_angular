import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment as config } from '../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RequestPaymentService {

    private httpOptions = {
    };

    constructor( private http: HttpClient, private authService : AuthService ) {
        let user = this.authService.getUser();
        this.httpOptions['headers'] = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'x-access-token': user['token']
        })
    }

    getAll(page: number): Observable<Response> {
        const url = config.api_url + `/payment-request?page=${page}`;
        return this.http.get(url, this.httpOptions).pipe(
            tap((response: Response)=>{
                return response;
            }),
            catchError(this.handleError)
        );
    }

    pay(id: string) : Observable<Response> {
        const url = config.api_url + `/payment-request/approve/${id}`;
        return this.http.put(url, this.httpOptions).pipe(
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