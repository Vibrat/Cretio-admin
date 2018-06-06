import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { IndexComponent } from './index/index.component';
import { PartnersRouterModule  } from './partners-router.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { NotificationModule } from '../../@theme/components/notification/notification.module';

@NgModule({
  imports: [
    CommonModule,
    PartnersRouterModule,
    Ng2SmartTableModule,
    ThemeModule,
    NotificationModule
  ],
  declarations: [GeneralComponent, IndexComponent]
})
export class PartnersModule { }
