import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPlaceholderComponent } from './banner-placeholder.component';

describe('BannerPlaceholderComponent', () => {
  let component: BannerPlaceholderComponent;
  let fixture: ComponentFixture<BannerPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
