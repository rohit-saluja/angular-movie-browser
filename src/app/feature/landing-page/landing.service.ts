import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  constructor(private httpClient: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${environment.baseUrl}/movies`);
  }

  public getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.baseUrl}/categories`);
  }

  public searchMovies(categories: string[]): Observable<Movie[]> {
    return this.httpClient.post<Movie[]>(
      `${environment.baseUrl}/movies/search`,
      { categories }
    );
  }

  public getMovieDetail(movieId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(
      `${environment.baseUrl}/movies/${movieId}`
    );
  }

  public getBannerImage(): Observable<Movie> {
    return this.httpClient.get<Movie>(
      `${environment.baseUrl}/movies/banner-image`
    );
  }
}
