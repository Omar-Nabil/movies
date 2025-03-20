import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
    let {id, type} = this._ActivatedRoute.snapshot.params;
    console.log(id, type);
    this.getDetailsMovie(id, type);
  }

  details:any;

  getDetailsMovie(id:string, type:string) {
    this._MoviesService.getDetailsMovie(id, type).subscribe({
      next:(response) => {
        this.details = response;
        console.log( this.details);

      },
      error: (err) => {console.log(err);
      }
    })
  }
}
