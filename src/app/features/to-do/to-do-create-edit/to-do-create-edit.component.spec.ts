import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCreateEditComponent } from './to-do-create-edit.component';

describe('ToDosCreateComponent', () => {
  let component: ToDoCreateEditComponent;
  let fixture: ComponentFixture<ToDoCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
