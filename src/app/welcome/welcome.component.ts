import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { decode } from 'blurhash';
import { Observable, Subscription } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { Photo } from '../unsplash/photo/photo';
import { UnsplashService } from '../unsplash/unsplash.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(SearchComponent, {static: false}) searchComponent!: SearchComponent;

  randomPhoto$!: Observable<Photo>;
  randomPhotoSubscription$!: Subscription;

  bgPhoto!: Photo;
  term: string = "";
  

  constructor(
    private elRef: ElementRef,
    private service: UnsplashService,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.randomPhoto$ = this.service.getRandom();
  }

  ngAfterViewInit(): void {
    this.randomPhotoSubscription$ = this.randomPhoto$.subscribe(p => this.changeBackground(p));
  }

  changeBackground(bgPhoto: Photo) {
    this.bgPhoto = bgPhoto;
    this.renderer.setStyle(this.elRef.nativeElement, "background-image", `url("${this.bgPhoto.urls.full}")`);
  }

  getPhotoWidth(): number {
    return 1080; //full
  }

  getPhotoHeight(): number {
    const ratio = this.bgPhoto!.width / this.getPhotoWidth();
    return Math.round(this.bgPhoto!.height / ratio);
  }

  ngOnDestroy() {
    this.randomPhotoSubscription$.unsubscribe();
  }
}
