import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { SlidersRouterModule } from './sliders-router.module';
import { IndexComponent } from './index/index.component';
import { SlidersComponent } from './sliders/sliders.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    SlidersRouterModule,
    ThemeModule,
    Ng2SmartTableModule,
    CKEditorModule
  ],
  declarations: [IndexComponent, SlidersComponent],
})
export class SlidersModule { }
