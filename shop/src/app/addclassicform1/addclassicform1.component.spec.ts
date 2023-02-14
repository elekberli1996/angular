import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addclassicform1Component } from './addclassicform1.component';

describe('Addclassicform1Component', () => {
  let component: Addclassicform1Component;
  let fixture: ComponentFixture<Addclassicform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addclassicform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addclassicform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
