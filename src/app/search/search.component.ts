import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Photo } from '../unsplash/photo/photo';
import { UnsplashService } from '../unsplash/unsplash.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  randomPhoto!: Photo;

  constructor(
    private formBuilder: FormBuilder,
    private service: UnsplashService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRandom();
    this.searchForm = this.formBuilder.group({
      q: ["", Validators.required]
    })
  }

  getRandom(): void {
    this.service.getRandom().subscribe(p => this.randomPhoto = p)
  }

  search(): void {
    if (!this.searchForm.valid) return;
    this.router.navigate(['/r'], { queryParams: this.searchForm.value });
  }
}
