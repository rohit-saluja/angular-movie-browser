import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardPlaceholderComponent } from './movie-card-placeholder.component';

describe('MovieCardPlaceholderComponent', () => {
  let component: MovieCardPlaceholderComponent;
  let fixture: ComponentFixture<MovieCardPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
