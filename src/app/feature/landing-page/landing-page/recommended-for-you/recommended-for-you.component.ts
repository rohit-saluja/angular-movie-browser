import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { LandingService } from '../../landing.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
  }

  get categories(): FormArray {
    return this.recommendedForm.get('categories') as FormArray;
  }
}
