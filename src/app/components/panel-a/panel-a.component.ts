import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-panel-a',
  templateUrl: './panel-a.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelAComponent {
  newTask = '';
  tasks = ['Task 1', 'Task 2', 'Task 3'];

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  changeFirstTask() {
    this.tasks[0] = `Task 1 (changed) ${new Date().getTime()}`;
  }

  calcLength(task: string) {
    console.log('calcLength called in PanelAComponent');
    return task.length;
  }

  check() {
    console.log('Called in PanelAComponent');
    return true;
  }

}
