import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAnimalComponent } from './item-animal.component';

describe('ItemAnimalComponent', () => {
  let component: ItemAnimalComponent;
  let fixture: ComponentFixture<ItemAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemAnimalComponent]
    });
    fixture = TestBed.createComponent(ItemAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
