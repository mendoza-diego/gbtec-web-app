import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term: string = '';
  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      q: [""]
    });

    this.activatedRoute.queryParamMap.subscribe(p => this.term = p.get('q') ?? "");
  }

  search(): void {
    if (!this.searchForm.valid) return;
    this.router.navigate(['r/photos'], { queryParams: this.searchForm.value });
  }
}
