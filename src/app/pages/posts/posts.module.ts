import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { PostsRouterModule } from './posts-router.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PostsRouterModule,
    Ng2SmartTableModule,
    CKEditorModule,
  ],
  declarations: [ArticlesComponent, ArticleComponent ],
})

export class PostsModule { }
