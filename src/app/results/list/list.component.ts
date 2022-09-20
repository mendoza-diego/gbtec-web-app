import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, map, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { Photo } from '../../unsplash/photo/photo';
import { UnsplashService } from '../../unsplash/unsplash.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  photosByColumn: Photo[][] = [[]];
  
  photos$!: Observable<Photo[]>;
  photosSubscription$!: Subscription;
  queryParamSubscription$!: Subscription;

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
    this.queryParamSubscription$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params),
    ).subscribe(q => {
      this.q = q.get("q")!;
      this.onSearch()
    });
  }

  onSearch(scroll: boolean = false) {
    if (!scroll) {
      this.photosByColumn = [[]];
      this.currPage = 0;
    }

    this.currPage++;

    if (this.currPage < this.lastPage || this.currPage == 1) {
      this.noResults = false;
      this.loading = true;
      
      this.photos$ = this.service.search(this.q, this.currPage)
        .pipe(
          tap(r => {
            this.totalResults = r.total;
            this.lastPage = r.total_pages ?? this.lastPage + 2;

            if (r.total == 0) this.noResults = true;
            this.loading = false;
          }),
          map(r => r.results ?? r),
          map(r => {
            r.forEach(p =>  p.urls.customThumb = `${p.urls.raw}&q=60&w=700`);
            return r;
          }),
          catchError((error: any): Observable<any> => {
            this.loading = false;
            return of(error as any);
          })
        );

      this.photosSubscription$ = this.photos$.subscribe(photos => {
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

  ngOnDestroy() {
    this.photosSubscription$.unsubscribe();
    this.queryParamSubscription$.unsubscribe();
  }
}
