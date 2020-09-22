import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JblogSharedModule } from 'app/shared/shared.module';
import { JblogCoreModule } from 'app/core/core.module';
import { JblogAppRoutingModule } from './app-routing.module';
import { JblogHomeModule } from './home/home.module';
import { JblogEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JblogSharedModule,
    JblogCoreModule,
    JblogHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JblogEntityModule,
    JblogAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JblogAppModule {}
