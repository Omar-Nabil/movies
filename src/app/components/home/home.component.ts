import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesService:MoviesService) {

  }
  ngOnInit(): void {
    this.getTrendingMovies('movie');
    this.getTrendingMovies('tv');
    this.getTrendingPeople();
  }

  TrendingMovies:any[] = [];
  TrendingTv:any[] = [];
  TrendingPeople:any[] = [];

  getTrendingMovies(type:string) :void {
    this._MoviesService.getTrendingMovies(type, 'top_rated').subscribe({
      next: (resoponse) => {
        if(type === 'movie') {
          this.TrendingMovies = resoponse.results;
          this.TrendingMovies = this.TrendingMovies.splice(0,10);
          console.log(this.TrendingMovies);

          this.TrendingMovies.forEach((ele) => ele.type = 'movie');
        } else {
          this.TrendingTv = resoponse.results;
          this.TrendingTv = this.TrendingTv.splice(0,10);
          console.log(this.TrendingTv);

          this.TrendingTv.forEach((ele) => ele.type = 'tv');
        }


      }
    })
  }
  getTrendingPeople() :void {
    this._MoviesService.getTrendingPeople().subscribe({
      next: (resoponse) => {
        this.TrendingPeople = resoponse.results;
        this.TrendingPeople = this.TrendingPeople.splice(2,10);
      }
    })
  }

}
