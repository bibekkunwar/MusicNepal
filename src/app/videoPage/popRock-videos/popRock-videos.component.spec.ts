/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopRockVideosComponent } from './popRock-videos.component';

describe('PopRockVideosComponent', () => {
  let component: PopRockVideosComponent;
  let fixture: ComponentFixture<PopRockVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopRockVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopRockVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
