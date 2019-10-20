import { Component, OnInit } from '@angular/core';
import { UsersRepository } from '../repositories/users.repository';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public isSearchedPosts: boolean;
  constructor(private usersRepository: UsersRepository) { }

  ngOnInit() {
    this.isSearchedPosts = false;
  }

  public Search(): void {
    this.isSearchedPosts = true;
  }
}
