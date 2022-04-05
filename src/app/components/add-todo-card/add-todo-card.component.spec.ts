import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoCardComponent } from './add-todo-card.component';

describe('AddTodoCardComponent', () => {
  let component: AddTodoCardComponent;
  let fixture: ComponentFixture<AddTodoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
