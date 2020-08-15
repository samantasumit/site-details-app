import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabratorsComponent } from './collabrators.component';

describe('CollabratorsComponent', () => {
  let component: CollabratorsComponent;
  let fixture: ComponentFixture<CollabratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
