import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDosListComponent } from '../to-dos-list/to-dos-list.component';

describe('ToDosListComponent', () => {
  let component: ToDosListComponent;
  let fixture: ComponentFixture<ToDosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
