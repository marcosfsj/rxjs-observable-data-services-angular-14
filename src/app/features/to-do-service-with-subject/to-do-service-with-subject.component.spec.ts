import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoServiceWithSubjectComponent } from './to-do-service-with-subject.component';

describe('ToDoServiceWithSubjectComponent', () => {
  let component: ToDoServiceWithSubjectComponent;
  let fixture: ComponentFixture<ToDoServiceWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoServiceWithSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoServiceWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
