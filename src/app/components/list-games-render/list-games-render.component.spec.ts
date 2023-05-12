import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamesRenderComponent } from './list-games-render.component';

describe('ListGamesRenderComponent', () => {
  let component: ListGamesRenderComponent;
  let fixture: ComponentFixture<ListGamesRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGamesRenderComponent]
    });
    fixture = TestBed.createComponent(ListGamesRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
