import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NetworksComponent } from './components/networks/networks.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PeopleComponent } from './components/people/people.component';
import { RegisterComponent } from './components/register/register.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"movies", component:MoviesComponent},
  {path:"tvShow", component:TvShowComponent},
  {path:"people", component:PeopleComponent},
  {path:"about", component:AboutComponent},
  {path:"details/:id/:type", component:MovieDetailsComponent},
  {path:"network", component:NetworksComponent},
  {path:"settings", loadChildren: () => import('./setting/setting.module').then((res) => res.SettingModule)},
  {path:"**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
