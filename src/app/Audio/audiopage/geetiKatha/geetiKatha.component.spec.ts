/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeetiKathaComponent } from './geetiKatha.component';

describe('GeetiKathaComponent', () => {
  let component: GeetiKathaComponent;
  let fixture: ComponentFixture<GeetiKathaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeetiKathaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeetiKathaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
