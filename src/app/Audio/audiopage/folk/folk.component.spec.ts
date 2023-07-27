/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FolkComponent } from './folk.component';

describe('FolkComponent', () => {
  let component: FolkComponent;
  let fixture: ComponentFixture<FolkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
