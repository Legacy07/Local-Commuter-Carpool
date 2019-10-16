import { Component, OnInit, Input } from '@angular/core';

import { UsersRepository } from '../repositories/login.repository';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
  }

}
