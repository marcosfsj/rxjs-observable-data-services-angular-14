import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDosCreateComponent } from '../views/to-dos-create/to-dos-create.component';

describe('ToDosCreateComponent', () => {
  let component: ToDosCreateComponent;
  let fixture: ComponentFixture<ToDosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDosCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
