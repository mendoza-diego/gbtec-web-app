import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Photo } from '../unsplash/photo/photo';
import { UnsplashService } from '../unsplash/unsplash.service';

@Component({
  selector: 'app-background-photo',
  templateUrl: './background-photo.component.html',
  styleUrls: ['./background-photo.component.css'],
})
export class BackgroundPhotoComponent implements OnInit, AfterViewInit {
  bgPhoto! : Photo;

  constructor(
    private elRef: ElementRef,
    private service: UnsplashService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.service.getRandom().subscribe(p => this.changeBackground(p))
  }

  changeBackground(bgPhoto: Photo) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-image", `url("${bgPhoto.urls.regular}")`);
  }
}
