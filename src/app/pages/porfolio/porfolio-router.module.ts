import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PorfoliosComponent } from './porfolios/porfolios.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: PorfoliosComponent },
            { path: 'new', component: IndexComponent },
            { path: 'edit/:seoUrl', component:  IndexComponent },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})

export class PorfolioRouterModule {}