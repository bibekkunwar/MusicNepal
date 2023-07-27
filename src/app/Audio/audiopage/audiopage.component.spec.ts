/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AudiopageComponent } from './audiopage.component';

describe('AudiopageComponent', () => {
  let component: AudiopageComponent;
  let fixture: ComponentFixture<AudiopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
