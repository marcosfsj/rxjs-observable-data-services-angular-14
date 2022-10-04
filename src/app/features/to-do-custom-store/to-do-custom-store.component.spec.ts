import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCustomStoreComponent } from './to-do-custom-store.component';

describe('ToDoCustomStoreComponent', () => {
  let component: ToDoCustomStoreComponent;
  let fixture: ComponentFixture<ToDoCustomStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCustomStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoCustomStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
