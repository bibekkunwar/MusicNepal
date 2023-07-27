/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GazalComponent } from './gazal.component';

describe('GazalComponent', () => {
  let component: GazalComponent;
  let fixture: ComponentFixture<GazalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GazalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
