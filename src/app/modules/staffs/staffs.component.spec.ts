import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsComponent } from './staffs.component';

describe('StaffsComponent', () => {
  let component: StaffsComponent;
  let fixture: ComponentFixture<StaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
