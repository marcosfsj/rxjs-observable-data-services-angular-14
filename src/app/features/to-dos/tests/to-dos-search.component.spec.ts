import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDosSearchComponent } from '../to-dos-search/to-dos-search.component';

describe('ToDosSearchComponent', () => {
  let component: ToDosSearchComponent;
  let fixture: ComponentFixture<ToDosSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDosSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
