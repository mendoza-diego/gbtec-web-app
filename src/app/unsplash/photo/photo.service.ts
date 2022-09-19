import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UnsplashService } from '../unsplash.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(
    private unsplashService: UnsplashService
  ) { }

  getWidth(size: string): number {
    if (size == "s") return 400;
    if (size == "r") return 1080;
    return 0;
  }

  calHeight(size: string, originalWidth: number, originalHeight: number): number {
    const ratio = originalWidth / this.getWidth(size);
    return Math.round(originalHeight / ratio);
  }

  getDimensions(size: string, originalWidth: number, originalHeight: number): string {
    return `${this.getWidth(size)} X ${this.calHeight(size, originalWidth, originalHeight)}`;
  }

  downloadPhoto(id: string, url: string) {
    this.unsplashService.trackDownload(id);

    fetch(url)
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('Sorry, an error occurred trying to download'));
  }
}
