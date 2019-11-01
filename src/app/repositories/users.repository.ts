import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { UserDetails } from '../Models/UserDetails';
import { UserModel } from '../Models/UserModel';
import { ConfigService } from '../config.service';

@Injectable({ providedIn: 'root' })
export class UsersRepository {

    private usersControllerUrl = 'https://localhost:44367/api/security';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) { }

    getUser(username: string, password: string): void {
        const url = `${this.usersControllerUrl}/${username}`;
        this.http.get<UserDetails>(url).subscribe(() => {
            console.log("asakjshjak");
        });
    }

    saveUser(user: UserModel): Observable<string> {
        const url = `${this.usersControllerUrl}`;
        return this.http.post<UserModel>(url, user, this.httpOptions)
            .pipe(
               catchError(ConfigService.HandleError) 
            );
    }

    GetValues() {
        this.http.get('http://localhost:5000/api/values').subscribe(response => {
            console.log(response);
        });
    }
}