import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-name-todo',
  templateUrl: './input-name-todo.component.html',
  styleUrls: ['./input-name-todo.component.scss']
})
export class InputNameTodoComponent {

  public test: string = "";

  constructor() { }

  public addTodo(): void{
    // let input = document.getElementById('input')?.innerHTML;
  }

}
