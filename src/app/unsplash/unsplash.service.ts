import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, pipe, switchMap } from 'rxjs';
import { Photo } from './photo/photo';
import { environment } from 'src/environments/environment';
import { SearchResult } from './photo/search-result';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private photosUrl: string = environment.unsplashApiUrl + '/photos';
  private searchUrl: string = environment.unsplashApiUrl + '/search/photos';

  constructor(
    private http: HttpClient
  ) { }

  getRandom(): Observable<Photo> {
    return this.http.get<Photo>(`${this.photosUrl}/random`);
  }

  search(q: string, currPage: number = 1): Observable<SearchResult> {
    if (!q) return this.list(currPage);
    return this.http.get<SearchResult>(`${this.searchUrl}/?query=${q}&page=${currPage}`);
  }

  list(currPage: number = 1): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.photosUrl}/?page=${currPage}`);
  }

  get(id: string): Observable<Photo> {
    return this.http.get<Photo>(`${this.photosUrl}/${id}`);
  }

  trackDownload(id: string): Observable<any> {
    return this.http.get<any>(`${this.photosUrl}/${id}/download`);
  }
}
