import { Component, OnInit, Input } from '@angular/core';

import { UsersRepository } from '../repositories/users.repository';
import { UserDetails } from '../Models/UserDetails';
import { Observable } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;

  constructor(private usersRepository: UsersRepository) {

  }

  ngOnInit() {
  }

  public Login(): void {
    this.usersRepository.getUser(this.username, this.password);  
    // this.usersRepository.GetValues();
  }

}
