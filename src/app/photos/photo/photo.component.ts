import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Photo } from 'src/app/unsplash/photo/photo';
import { PhotoService } from 'src/app/unsplash/photo/photo.service';
import { UnsplashService } from 'src/app/unsplash/unsplash.service';
import { InOut } from '../../animations/in-out-animation';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  animations: [InOut]
})
export class PhotoComponent implements OnInit {
  @Input() photo!: Photo;
  showCard: boolean = false;
  isDialog: boolean = false;
  id!: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public photoService: PhotoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;

    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: any) => {
        const navigation = this.router.getCurrentNavigation();
        // this.isDialog = navigation!.extras.state!['dialog'] ?? false;

        if (this.isDialog) //history.state.dialog
          this.openDialog();
      });
  }

  openDialog() {
    // this.dialog.open(PhotoDetailsComponent, {
    //   width: '100%'
    // });
  }

  downloadPhoto(id: string, url: string) {
    this.photoService.downloadPhoto(id, url);
  }

  openPhoto() {
    this.router.navigate(['/photos/', this.photo.id], { state: { dialog: true } });
  }
}
