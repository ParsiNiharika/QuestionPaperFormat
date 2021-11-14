import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemPartBComponent } from './sem-part-b.component';

describe('SemPartBComponent', () => {
  let component: SemPartBComponent;
  let fixture: ComponentFixture<SemPartBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemPartBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemPartBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
