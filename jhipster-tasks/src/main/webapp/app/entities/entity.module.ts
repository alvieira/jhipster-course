import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.TasksTaskModule),
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.TasksPostModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TasksEntityModule {}
