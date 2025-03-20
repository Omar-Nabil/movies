import { Component } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private _MoviesService:MoviesService) {}

  search:string = '';
  pageNumber:number =1;

  pages:number[] = new Array(10).fill("z").map((ele, index) => index+1);

  ngOnInit(): void {
    this.getTrendingMovies('movie', 1);
  }

  TrendingMovies:any[] = [];

  getTrendingMovies(type:string, page:number) :void {
    this.pageNumber = page;
    if(this.search) {
      this.searchApi('movie');
    }
    else {
      this._MoviesService.getTrendingMovies(type, 'popular', this.pageNumber).subscribe({
      next: (resoponse) => {
          this.TrendingMovies = resoponse.results;
          this.TrendingMovies.forEach((ele) => ele.type = 'movie');
      }
    })
    }
  }
  searchApi(type:string) {
    if(this.search) {
      this._MoviesService.getSearchResult(type, this.search, this.pageNumber).subscribe({
        next: (resoponse) => {
            this.TrendingMovies = resoponse.results;
            this.TrendingMovies.forEach((ele) => ele.type = 'movie');
        }
      })
    } else {
      this.getTrendingMovies('movie', this.pageNumber);
    }
  }
}
