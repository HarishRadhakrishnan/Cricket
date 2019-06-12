import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrounderComponent } from './allrounder.component';

describe('AllrounderComponent', () => {
  let component: AllrounderComponent;
  let fixture: ComponentFixture<AllrounderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrounderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
