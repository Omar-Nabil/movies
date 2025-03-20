import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }

  getTrendingMovies(type: string, status: string, page: Number = 1): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${status}?api_key=28b7f8d9778dfbf80396137b3831b2ce&&page=${page}`);
  }
  getTrendingPeople(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=28b7f8d9778dfbf80396137b3831b2ce');
  }
  getDetailsMovie(id: string, type: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=28b7f8d9778dfbf80396137b3831b2ce`);
  }
  getSearchResult(type: string, term: string, pageNumber: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/${type}?api_key=28b7f8d9778dfbf80396137b3831b2ce&&query=${term}&&page=${pageNumber}`)
  }
}

