import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersRepository {

    private usersControllerUrl = 'localhost/44367/api/users';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) { }

    getUser(username: string, password: string): Observable<boolean> {
        const url = `${this.usersControllerUrl}/?username=${username}/?password=${password}`;
        return this.http.get<boolean>(url);
    }
}