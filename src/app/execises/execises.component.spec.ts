import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecisesComponent } from './execises.component';

describe('ExecisesComponent', () => {
  let component: ExecisesComponent;
  let fixture: ComponentFixture<ExecisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecisesComponent],
    });
    fixture = TestBed.createComponent(ExecisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
