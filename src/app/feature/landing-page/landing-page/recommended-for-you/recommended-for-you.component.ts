import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { LandingService } from '../../landing.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss'],
})
export class RecommendedForYouComponent implements OnInit {
  @Input() movies: Movie[] = [];
  categoriesList: string[] = [];
  recommendedForm: FormGroup = new FormGroup({});

  constructor(
    private landingService: LandingService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.recommendedForm = this.fb.group({
      categories: this.fb.array([]),
    });
    this.landingService.getCategories().subscribe((res: string[]) => {
      this.categoriesList = res;
      this.categoriesList.map((c) =>
        this.categories.push(this.fb.group({ name: c, value: false }))
      );
    });
    this.categories.valueChanges
      .pipe(
        switchMap((categories) =>
          this.landingService.searchMovies(
            categories
              .filter((category: { value: boolean }) => category.value)
              .map((category: { name: string }) => category.name)
          )
        )
      )
      .subscribe((res: Movie[]) => (this.movies = res));
  }

  get categories(): FormArray {
    return this.recommendedForm.get('categories') as FormArray;
  }
}
