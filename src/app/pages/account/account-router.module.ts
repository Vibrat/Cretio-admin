import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountRegisterComponent } from './account-register/account-register.component';

const routes: Routes = [
    {
    path: '',
    component: AccountListComponent,
    children: [
        {
            path: 'account-list',
            component: AccountListComponent,
        },
    ],
    },
    {
        path: 'account-register',
        component: AccountRegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRouterModule {
}
