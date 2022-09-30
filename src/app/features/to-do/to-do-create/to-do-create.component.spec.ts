import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCreateComponent } from './to-do-create.component';

describe('ToDosCreateComponent', () => {
  let component: ToDoCreateComponent;
  let fixture: ComponentFixture<ToDoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
