import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApiRenderComponent } from './list-api-render.component';

describe('ListApiRenderComponent', () => {
  let component: ListApiRenderComponent;
  let fixture: ComponentFixture<ListApiRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListApiRenderComponent]
    });
    fixture = TestBed.createComponent(ListApiRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
