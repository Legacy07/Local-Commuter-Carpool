import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MemberpostsComponent } from './memberposts/memberposts.component';
import { EditpostComponent } from './editpost/editpost.component';
import { PostjourneyComponent } from './postjourney/postjourney.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: 'home', component: HomeComponent, children: [
  //     { path: 'login', component: LoginComponent },
  //     { path: 'register', component: RegisterComponent }
  //   ]
  // }
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'myposts', component: MemberpostsComponent, children: [
      { path: 'myposts/editpost', component: EditpostComponent },
      { path: 'myposts/postjourney', component: PostjourneyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
