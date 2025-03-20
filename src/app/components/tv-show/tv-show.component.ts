import { Component } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent {
constructor(private _MoviesService:MoviesService) {

  }
   search:string = '';
  pages:number[] = new Array(10).fill("z").map((ele, index) => index+1);
  ngOnInit(): void {
    this.getTrendingMovies('tv', 1);
  }

  TrendingMovies:any[] = [];

  getTrendingMovies(type:string, page:number) :void {
    this._MoviesService.getTrendingMovies(type, 'popular', page).subscribe({
      next: (resoponse) => {

          this.TrendingMovies = resoponse.results;
          this.TrendingMovies.forEach((ele) => ele.type = 'tv');

      }
    })
  }
}
