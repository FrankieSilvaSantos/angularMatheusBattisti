import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimal1Component } from './list-animal1.component';

describe('ListAnimal1Component', () => {
  let component: ListAnimal1Component;
  let fixture: ComponentFixture<ListAnimal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAnimal1Component]
    });
    fixture = TestBed.createComponent(ListAnimal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
