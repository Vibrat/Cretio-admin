import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SlidersComponent} from './sliders/sliders.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: SlidersComponent },
            { path: 'new', component: IndexComponent },
            { path: 'edit/:seoUrl', component:  IndexComponent },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})

export class SlidersRouterModule {}