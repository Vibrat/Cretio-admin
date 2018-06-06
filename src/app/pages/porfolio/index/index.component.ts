import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FileUploadService } from '../../file-upload.service';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public   form: FormGroup;
  readonly slug: string;
  public   imagePost: object | any;
  public   config: ToasterConfig = new ToasterConfig({
        showCloseButton: true, tapToDismiss: false, timeout: 0
    });

    constructor(private route: ActivatedRoute,
              private api: ApiService,
              private file: FileUploadService,
              private toaster: ToasterService,
              private routes: Router,
              private location: Location  ) {
      /**
       *  Getting slug from url to determine whether this is createNew or just edit information
       * @type {string | null}
       */
      this.slug = this.route.snapshot.paramMap.get('seoUrl');
      this.form = new FormGroup({
          'title': new FormControl('', [ Validators.required, Validators.minLength(12)]),
          'order': new FormControl(),
          'image': new FormControl(),
          'seo': new FormControl(),
          'hidden': new FormControl(),
      });
  }

  ngOnInit() { if (this.slug) this.edit(this.slug); }

  edit(slug: string): void {
      /**
       * Loading API from data to return information of a porfolio
       */
      this.api.getData('https://hilapy-be.herokuapp.com/posts/' + slug).subscribe((response) => {
          if (response.meta.code == 200) {
              this.form.setValue({
                 title: response.data.title,
                 order: response.data.__v,
                 image: response.data.image,
                 seo: response.data.seo,
                 hidden: (!response.data.hidden).toString()
              });

              this.imagePost = response.data.image;
          }
      });
  }

  onUpload(event) {
      /**
       * property files will return array type so we need to get the first item to be upload
       */
      let files = event.target.files;
      this.file.post(files.item(0)).subscribe((response) => {
          if (response.meta.code != 200) {
                throw new Error('Api not getting response');
          }

          this.form.patchValue({ image: response.data });
          this.imagePost = response.data;

      }, (error) => { this.api.redirectLogin(); });
  }

  onSubmit() {
      if (this.slug != '') {
          this.api.postData('https://hilapy-be.herokuapp.com/posts?token=' + this.api.getToken(), this.form.value)
              .subscribe((response) => {
                  /**
                   * showing example of success
                   */
                  if (response.meta.code != 200) {
                      this.toaster.popAsync('error', 'Error when submitting');
                      throw new Error('response not return exact data');
                  }
                  this.toaster.popAsync('success', 'Submit successful');
                  setTimeout(() =>{ this.routes.navigateByUrl('pages/porfolio') }, 3000);
              });
      } else {
          this.api.putData('https://hilapy-be.herokuapp.com/posts/' + this.slug + '?token=' + this.api.getToken(), this.form.value)
              .subscribe((response) => {
                  /**
                   * showing example of success
                   */
                  if (response.meta.code != 200) {
                      this.toaster.popAsync('error', 'Error when submitting');
                      throw new Error('response not return exact data');
                  }
                  this.toaster.popAsync('success', 'Submit successful');
                  setTimeout(() =>{ this.routes.navigateByUrl('pages/porfolio') }, 3000);
              });
      }
  }

  goBack() {
        this.location.back();
  }

  get title() {
      return this.form.controls.title;
  }
}
