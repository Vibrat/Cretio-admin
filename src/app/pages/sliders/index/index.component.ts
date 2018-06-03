import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ckEditorConfig } from './data/indexslider';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public form: FormGroup;
  readonly slug: string;
  public config = ckEditorConfig;

  constructor(private route: ActivatedRoute) {

      /**
       *  Getting slug from url to determine whether this is createNew or just edit information
       * @type {string | null}
       */
      this.slug = this.route.snapshot.paramMap.get('urlSeo');

      this.form = new FormGroup({
         'name': new FormControl(),
         'image': new FormControl(),
         'order': new FormControl(),
         'active': new FormControl(),
      });
  }

  ngOnInit() {
     if (this.slug) this.edit(this.slug);
  }

  edit(slug: string): void {
      /**
       * Loading API from data to return information of a porfolio
       */
  }
}
