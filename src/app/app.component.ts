import { StateService } from './services/state.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dialog: MatDialog,
    public state: StateService
  ) { }

  openDialog(): void {
    this.dialog.open(NewTodoComponent, { width: '375px' })
  }
}
