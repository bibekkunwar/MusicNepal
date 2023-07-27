/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModernComponent } from './modern.component';

describe('ModernComponent', () => {
  let component: ModernComponent;
  let fixture: ComponentFixture<ModernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
