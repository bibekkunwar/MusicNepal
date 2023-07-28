/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdhunikSongsVideosComponent } from './adhunikSongs-videos.component';

describe('AdhunikSongsVideosComponent', () => {
  let component: AdhunikSongsVideosComponent;
  let fixture: ComponentFixture<AdhunikSongsVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhunikSongsVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhunikSongsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
