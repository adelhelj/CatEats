import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingListComponent } from './feeding-list.component';

describe('FeedingListComponent', () => {
  let component: FeedingListComponent;
  let fixture: ComponentFixture<FeedingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedingListComponent]
    });
    fixture = TestBed.createComponent(FeedingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
