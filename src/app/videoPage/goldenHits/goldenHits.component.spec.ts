/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoldenHitsComponent } from './goldenHits.component';

describe('GoldenHitsComponent', () => {
  let component: GoldenHitsComponent;
  let fixture: ComponentFixture<GoldenHitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldenHitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
