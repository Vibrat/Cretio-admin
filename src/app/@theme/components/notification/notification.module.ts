import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule} from 'angular2-toaster';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [
    CommonModule,
    ToasterModule
  ],
  declarations: [ NotificationComponent ],
  exports: [ NotificationComponent ]
})
export class NotificationModule {}
