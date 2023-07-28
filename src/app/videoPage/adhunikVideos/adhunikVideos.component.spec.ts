/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdhunikVideosComponent } from './adhunikVideos.component';

describe('AdhunikVideosComponent', () => {
  let component: AdhunikVideosComponent;
  let fixture: ComponentFixture<AdhunikVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhunikVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhunikVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
