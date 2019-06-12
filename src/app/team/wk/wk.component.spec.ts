import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WkComponent } from './wk.component';

describe('WkComponent', () => {
  let component: WkComponent;
  let fixture: ComponentFixture<WkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
