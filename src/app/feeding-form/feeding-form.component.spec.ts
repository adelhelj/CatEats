import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingFormComponent } from './feeding-form.component';

describe('FeedingFormComponent', () => {
  let component: FeedingFormComponent;
  let fixture: ComponentFixture<FeedingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedingFormComponent]
    });
    fixture = TestBed.createComponent(FeedingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
