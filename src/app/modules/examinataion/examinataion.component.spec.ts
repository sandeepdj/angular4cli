import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminataionComponent } from './examinataion.component';

describe('ExaminataionComponent', () => {
  let component: ExaminataionComponent;
  let fixture: ComponentFixture<ExaminataionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminataionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminataionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
