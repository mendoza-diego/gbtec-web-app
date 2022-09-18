import { Component, Inject, OnInit, Optional, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from 'src/app/unsplash/photo/photo';
import { BlurhashComponent } from '../blurhash/blurhash.component';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  @ViewChild(BlurhashComponent) blurHashEl!: BlurhashComponent;

  constructor(
    @Optional() public dialogRef: MatDialogRef<PhotoDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public photo: Photo,
    private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.blurHashEl.canvas.nativeElement, "width", "100%");
    this.renderer.setStyle(this.blurHashEl.canvas.nativeElement, "height", "auto");
    this.renderer.setStyle(this.blurHashEl.img.nativeElement, "width", "100%");
    this.renderer.setStyle(this.blurHashEl.img.nativeElement, "height", "auto");
  }

  getPhotoWidth(): number {
    return 1080; //small
  }

  getPhotoHeight(): number {
    const ratio = this.photo.width / this.getPhotoWidth();
    return Math.round(this.photo.height / ratio);
  }
}
