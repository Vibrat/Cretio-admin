import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { SettingRouterModule } from './setting-router.module';
import { GeneralComponent } from './general/general.component';

@NgModule({
  imports: [
    CommonModule,
    SettingRouterModule,
    ThemeModule,
  ],
  declarations: [GeneralComponent],
})
export class SettingModule { }
