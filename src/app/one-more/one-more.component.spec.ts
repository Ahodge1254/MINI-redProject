import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMoreComponent } from './one-more.component';

describe('OneMoreComponent', () => {
  let component: OneMoreComponent;
  let fixture: ComponentFixture<OneMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
