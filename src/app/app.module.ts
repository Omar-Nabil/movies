import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NetworksComponent } from './components/networks/networks.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PeopleComponent } from './components/people/people.component';
import { RegisterComponent } from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { LoadingInterceptor } from './core/loading.interceptor';
import { OverviewPipe } from './core/pipes/overview.pipe';
import { SearchTvPipe } from './core/pipes/search-tv.pipe';
import { SearchPipe } from './core/pipes/searchMovie.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MovieDetailsComponent,
    NavbarComponent,
    MoviesComponent,
    TvShowComponent,
    PeopleComponent,
    AboutComponent,
    NetworksComponent,
    NotfoundComponent,
    ItemComponent,
    OverviewPipe,
    SearchPipe,
    SearchTvPipe,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    RouterModule,
    CarouselModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
