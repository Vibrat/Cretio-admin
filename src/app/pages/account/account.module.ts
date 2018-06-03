import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountRouterModule } from './account-router.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountListDataService } from './account-list-data.service';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountValidateDirective } from './account-validate.directive';

@NgModule({
  imports: [
    CommonModule,
      AccountRouterModule,
      ThemeModule,
      Ng2SmartTableModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [ AccountListComponent, AccountRegisterComponent, AccountValidateDirective ],
  providers: [ AccountListDataService ],
  exports: [ AccountListComponent ],
})
export class AccountModule { }
