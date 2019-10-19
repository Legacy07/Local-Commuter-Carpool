import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserDetails } from '../Models/UserDetails';
import { UserModel } from '../Models/UserModel';

@Injectable({ providedIn: 'root' })
export class UsersRepository {

    private usersControllerUrl = 'https://localhost:44367/api/users';

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

    saveUser(user: UserModel): void {
        const url = `${this.usersControllerUrl}`;
        this.http.post(url, user).subscribe(() => {
            console.log("asakjshjak");
        });
    }

    GetValues() {
        this.http.get('http://localhost:5000/api/values').subscribe(response => {
            console.log(response);
        });
    }
}