import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodClassicsComponent } from './bollywood-classics.component';

describe('BollywoodClassicsComponent', () => {
  let component: BollywoodClassicsComponent;
  let fixture: ComponentFixture<BollywoodClassicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollywoodClassicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollywoodClassicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
