import { Component, OnDestroy, OnInit, Optional, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Photo } from 'src/app/unsplash/photo/photo';
import { PhotoService } from 'src/app/unsplash/photo/photo.service';
import { UnsplashService } from 'src/app/unsplash/unsplash.service';
import { BlurhashComponent } from '../blurhash/blurhash.component';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
  @ViewChild(BlurhashComponent) blurHashEl!: BlurhashComponent;

  photoSubscription$!: Subscription;

  id!: string;
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
    this.photoSubscription$ = this.service.get(this.id).subscribe(photo => {
      this.photo = photo;
    });
  }

  downloadPhoto(id: string, url: string) {
    this.photoService.downloadPhoto(id, url);
  }

  goToUserPortfolio() {
    window.open(this.photo.user.links.html, "_blank");
  }

  ngOnDestroy() {
    this.photoSubscription$.unsubscribe();
  }
}
