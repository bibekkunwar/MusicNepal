/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopRockComponent } from './popRock.component';

describe('PopRockComponent', () => {
  let component: PopRockComponent;
  let fixture: ComponentFixture<PopRockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopRockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
