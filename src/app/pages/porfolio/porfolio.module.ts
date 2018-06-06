import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { PorfolioRouterModule } from './porfolio-router.module';
import { IndexComponent } from './index/index.component';
import { PorfoliosComponent } from './porfolios/porfolios.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    CommonModule,
    PorfolioRouterModule,
    ThemeModule,
    Ng2SmartTableModule,
    ToasterModule
  ],
  declarations: [IndexComponent, PorfoliosComponent],
})
export class PorfolioModule { }
