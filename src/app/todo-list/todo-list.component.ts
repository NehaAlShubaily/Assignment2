import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
 
  newTask: string = '';
  taskList: { id: number; name: string; checked: boolean }[] = [];
  itemTest : string = '';   

  ngOnInit() {
    this.loadTodos();
  }
  


  addTodo() {
    
    if (this.itemTest.length >= 4 && this.itemTest.length <= 200 &&  /^[a-zA-Z0-9\s]+$/.test(this.itemTest)) {
      this.addTask(this.itemTest); 
      this.saveTodos();
      this.itemTest = '';
    } else {
      alert('Please enter a valid To-Do item ');
    }
  }

    // //remove checked propertie if error 
    // studentList = [
    //   { id: 1, name: 'John Doe', checked: false },
    //   { id: 2, name: 'Jane Smith', checked: false },
    //   { id: 3, name: 'Michael Johnson', checked: false }
    // ];

    ///
   
    
    
    
    addTask(item: string) {
     
      this.taskList.push({ id: this.taskList.length, name: item, checked: false });
    }
    
  
    delete(index: number) {
      this.taskList.splice(index, 1);
      this.saveTodos();
  
    }
////
loadTodos() {
  const savedTodos = localStorage.getItem('taskList');
  this.taskList = savedTodos ? JSON.parse(savedTodos) : [];
}

    /////
    saveTodos() {
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }

    //from herre 
    completedList: { id: number, name: string, checked: boolean }[] = [];

    addToCompletedList(todoTask: { id: number, name: string, checked: boolean }) {
      if (todoTask.checked) {
        this.completedList.push(todoTask);
        this.taskList = this.taskList.filter(item => item !== todoTask);
        this.saveTodos();
      }
    }
  }

