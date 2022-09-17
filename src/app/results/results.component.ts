import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Photo } from '../unsplash/photo/photo';
import { UnsplashService } from '../unsplash/unsplash.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  photos: Photo[] = [];
  photos$!: Observable<Photo[]>;
  totalResults: number;
  lastPage: number;
  currPage: number;
  private q!: string;

  constructor(
    private service: UnsplashService,
    private route: ActivatedRoute
  ) {
    this.totalResults = 0;
    this.lastPage = 0;
    this.currPage = 0;
  }

  ngOnInit(): void {
    this.q = String(this.route.snapshot.queryParamMap.get("q"));
    this.onSearch();
  }

  onSearch() {
    if (this.currPage < this.lastPage || this.currPage == 0) {
      this.photos$ = this.service.search(this.q, this.currPage + 1)
        .pipe(
          tap(r => {
            this.currPage++;
            this.totalResults = r.total;
            this.lastPage = r.total_pages
          }),
          map(r => r.results)
        );

      this.photos$.subscribe(photos => {
        this.photos = this.photos.concat(photos);
      });
    }
  }

  onScroll() {
    this.onSearch();
  }
}
