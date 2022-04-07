import { Injectable } from '@angular/core';
import Item from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /**
   * Liste des de toutes les todos 
   */
  private _todos: Item[] = [];

  constructor() { }

  // public createTodo(): Item{
  //   let item: Item
  // }

}
