import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { UsersRepository } from '../repositories/users.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  @Input() user: UserModel;

  constructor(private usersRepository: UsersRepository,
    private router: Router) { }

  ngOnInit() {
    this.user = UserModel.defaultInstance();
  }

  public SaveUser(): void {
    this.usersRepository.saveUser(this.user)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
