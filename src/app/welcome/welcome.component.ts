import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { decode } from 'blurhash';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { Photo } from '../unsplash/photo/photo';
import { UnsplashService } from '../unsplash/unsplash.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  bgPhoto!: Photo;
  randomPhoto$!: Observable<Photo>;
  term: string = "";
  @ViewChild(SearchComponent, {static: false}) searchComponent!: SearchComponent;

  constructor(
    private elRef: ElementRef,
    private service: UnsplashService,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.getRandom();
  }

  ngAfterViewInit(): void {
    this.randomPhoto$.subscribe(p => this.changeBackground(p))
  }

  getRandom(): void {
    this.randomPhoto$ = this.service.getRandom();
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
}
