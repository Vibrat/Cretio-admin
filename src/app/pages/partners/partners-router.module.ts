import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: GeneralComponent},
            { path: 'index/:seoUrl', component: IndexComponent },
            { path: 'new', component: IndexComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PartnersRouterModule {}