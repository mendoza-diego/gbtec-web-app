import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Photo } from '../../unsplash/photo/photo';
import { UnsplashService } from '../../unsplash/unsplash.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  photosByColumn: Photo[][] = [[]];
  photos$!: Observable<Photo[]>;
  totalResults: number;
  lastPage: number;
  currPage: number;
  q!: string;
  loading:boolean = true;
  noResults:boolean = false;

  constructor(
    private service: UnsplashService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.totalResults = 0;
    this.lastPage = 0;
    this.currPage = 0;
  }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      map((params: ParamMap) => params),
    ).subscribe(q => {
      this.q = String(q.get("q"));
      this.onSearch()
    });
  }

  onSearch(scroll: boolean = false) {
    if (!scroll) {
      this.photosByColumn = [[]];
      this.currPage = 0;
    }

    if (this.currPage < this.lastPage || this.currPage == 0) {
      this.noResults = false;
      this.loading = true;
      
      this.photos$ = this.service.search(this.q, this.currPage + 1)
        .pipe(
          tap(r => {
            this.currPage++;
            this.totalResults = r.total;
            this.lastPage = r.total_pages;

            if (r.total == 0) this.noResults = true;
            this.loading = false;
          }),
          map(r => r.results),
          catchError((error: any): Observable<any> => {
            this.loading = false;
            return of(error as any);
          })
        );

      this.photos$.subscribe(photos => {
        this.onGroupPhotos(photos);
      });
    }
  }

  onScroll() {
    this.onSearch(true);
  }

  onGroupPhotos(photos: Photo[]) {
    if (this.photosByColumn.length == 0) this.photosByColumn = [[], [], []];

    let startGroup = this.photosByColumn.reduce((p, c, i, a) => {
      i = a.indexOf(p.length > c.length ? c : p);
      return a[i];
    });

    let indexStartGroup = this.photosByColumn.indexOf(startGroup);

    for (let i = 0; i < photos.length; i++, indexStartGroup++) {
      if (!this.photosByColumn[indexStartGroup % 3]) this.photosByColumn[indexStartGroup % 3] = [];
      this.photosByColumn[indexStartGroup % 3].push(photos[i]);
    }
  }
}
