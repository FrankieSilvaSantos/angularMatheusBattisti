import { ComponentFixture, TestBed } from '@angular/core/testing';

import { If2Component } from './if2.component';

describe('If2Component', () => {
  let component: If2Component;
  let fixture: ComponentFixture<If2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [If2Component]
    });
    fixture = TestBed.createComponent(If2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
