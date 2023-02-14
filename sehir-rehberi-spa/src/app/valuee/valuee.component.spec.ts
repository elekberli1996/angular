/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValueeComponent } from './valuee.component';

describe('ValueeComponent', () => {
  let component: ValueeComponent;
  let fixture: ComponentFixture<ValueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
