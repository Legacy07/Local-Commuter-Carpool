import { Component, OnInit } from '@angular/core';
import { UsersRepository } from '../repositories/users.repository';
import { JourneyPost } from '../Models/JourneyPost';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public isSearchedPosts: boolean;
  public Posts: JourneyPost[];
  constructor(private usersRepository: UsersRepository) { }

  ngOnInit() {
    this.isSearchedPosts = false;
    this.Posts = new Array<JourneyPost>();
  }

  public Search(): void {
    this.isSearchedPosts = true;
  }
}
