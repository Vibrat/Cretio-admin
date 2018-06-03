import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ckEditorConfig } from './data/article';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {
  protected slug: string;
  protected data: string;
  protected form: FormGroup;
  public editorValue: string;
  public urlValue: string;
  public config = ckEditorConfig;

  constructor(private route: ActivatedRoute) {
      /**
       * Getting slug from browser http request
       * @type {string | null}
       */
      this.slug = this.route.snapshot.paramMap.get('seoUrl');

      /**
       * Generate form to handle request and validation
       */
      this.form = new FormGroup({
          'title': new FormControl ('', [ Validators.required, Validators.minLength(15), Validators.maxLength(80)] ),
          'textEditor': new FormControl ( this.editorValue , []),
          'date':   new FormControl ('', []),
          'category': new FormControl ( '',  [Validators.required]),
          'image': new FormControl ('', []),
          'images': new FormControl('', []),
          'seoTitle': new FormControl('', []),
          'seoDescription': new FormControl('', []),
          'seoImage': new FormControl('', [])
      });
  }

  ngOnInit() {

      /**
       * Loading content value from API
       */

      if (this.slug != null) this.getArticle(); else {
          this.newArticle();
      }
  }

  newArticle() {
      /**
       * This will be used to handle new article
       */
  }

  getArticle() {
      /**
       * Loading old Article based on seoUrl
       */
  }

  onEditorChange(event: string){
      /**
       * we will getcontent of the editor here.
       */

      this.form.get('textEditor').setValue(event);
  }

  uploadImage(event) {
      /**
       * we will handle file upload here
       * @return url of the image
       */

      this.urlValue = '/url-link-to-web';
  }
}
