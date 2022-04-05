import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNameTodoComponent } from './input-name-todo.component';

describe('InputNameTodoComponent', () => {
  let component: InputNameTodoComponent;
  let fixture: ComponentFixture<InputNameTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNameTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNameTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
