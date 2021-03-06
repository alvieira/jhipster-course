import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'speaker',
        loadChildren: () => import('./speaker/speaker.module').then(m => m.GatewaySpeakerModule),
      },
      {
        path: 'session',
        loadChildren: () => import('./session/session.module').then(m => m.GatewaySessionModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog/blog.module').then(m => m.BlogBlogModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class GatewayEntityModule {}
