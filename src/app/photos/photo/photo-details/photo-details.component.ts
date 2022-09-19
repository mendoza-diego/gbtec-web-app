import { Component, OnInit, Optional, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/unsplash/photo/photo';
import { PhotoService } from 'src/app/unsplash/photo/photo.service';
import { UnsplashService } from 'src/app/unsplash/unsplash.service';
import { BlurhashComponent } from '../blurhash/blurhash.component';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  @ViewChild(BlurhashComponent) blurHashEl!: BlurhashComponent;
  id!: string;
  photo$!: Observable<Photo>;
  photo!: Photo;
  isDialog: boolean = false;

  constructor(
    public dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<PhotoDetailsComponent>,
    private service: UnsplashService,
    public photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.onGet();
  }

  onGet() {
    this.photo$ = this.service.get(this.id);
    this.photo$.subscribe(photo => {
      this.photo = photo;
    });
  }

  ngAfterViewInit(): void {
    // this.renderer.setStyle(this.blurHashEl.canvas.nativeElement, "width", "100%");
    // this.renderer.setStyle(this.blurHashEl.canvas.nativeElement, "height", "auto");
    // this.renderer.setStyle(this.blurHashEl.img.nativeElement, "width", "100%");
    // this.renderer.setStyle(this.blurHashEl.img.nativeElement, "height", "auto");
  }
}
