import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/unsplash/photo/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo!: Photo;

  constructor() {}

  ngOnInit(): void {
  }

}
