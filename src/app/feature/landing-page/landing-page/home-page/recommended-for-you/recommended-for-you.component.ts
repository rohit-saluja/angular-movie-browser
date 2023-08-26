import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../movie.model';
import { LandingService } from '../../../landing.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss'],
})
export class RecommendedForYouComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() showCategoriesFilter: boolean = true;
  @Input() header: string = 'movies you must watch';
  categoriesList: string[] = [];
  recommendedForm: FormGroup = new FormGroup({});

  constructor(
    private landingService: LandingService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.showCategoriesFilter) {
      this.recommendedForm = this.fb.group({
        categories: this.fb.array([]),
      });
      this.landingService.getCategories().subscribe((res: string[]) => {
        this.categoriesList = res;
        this.categoriesList.map((c) =>
          this.categories.push(this.fb.group({ name: c, value: false }))
        );
      });
    }
  }

  selectItem(category: AbstractControl): void {
    category.patchValue({ value: !category.value.value });
    this.landingService
      .searchMovies(
        this.categories.value
          .filter((category: { value: boolean }) => category.value)
          .map((category: { name: string }) => category.name)
      )
      .subscribe((res) => (this.movies = res));
  }

  get categories(): FormArray {
    return this.recommendedForm.get('categories') as FormArray;
  }
}
