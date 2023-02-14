/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityaddComponent } from './cityadd.component';

describe('CityaddComponent', () => {
  let component: CityaddComponent;
  let fixture: ComponentFixture<CityaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
