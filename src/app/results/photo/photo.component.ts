import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/unsplash/photo/photo';
import { InOut } from '../../animations/in-out-animation';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  animations: [InOut]
})
export class PhotoComponent implements OnInit {
  @Input() photo!: Photo;
  showCard: boolean = false;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  showPhotoDetails() {
    this.dialog.open(PhotoDetailsComponent, {
      data: this.photo
    });
  }

  getPhotoWidth(): number {
    return 400; //small
  }

  getPhotoHeight(): number {
    const ratio = this.photo.width / this.getPhotoWidth();
    return Math.round(this.photo.height / ratio);
  }
}
