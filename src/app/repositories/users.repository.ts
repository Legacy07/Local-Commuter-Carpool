import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { UserDetails } from '../Models/UserDetails';
import { UserModel } from '../Models/UserModel';
import { ConfigService } from '../config.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersRepository {

    private usersControllerUrl = 'https://localhost:44367/api/security';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private configService: ConfigService) { }

    getUser(username: string, password: string): Observable<string> {
        const url = `${this.usersControllerUrl}/${username}/${password}`;
        return this.http.get<string>(url)
            .pipe(
                catchError(this.configService.HandleError)
            );
    }

    saveUser(user: UserModel): Observable<string> {
        const url = `${this.usersControllerUrl}`;
        return this.http.post<string>(url, user, this.httpOptions)
            .pipe(
                catchError(this.configService.HandleError)
            );
    }

    GetValues() {
        this.http.get('http://localhost:5000/api/values').subscribe(response => {
            console.log(response);
        });
    }
}