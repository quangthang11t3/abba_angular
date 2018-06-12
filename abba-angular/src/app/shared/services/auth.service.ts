import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor( private router: Router ) {

    }

    getUser() {
        let user = localStorage.getItem('user');
        if(user) return JSON.parse(user);
        return this.router.navigate(['/login']);
    }
}