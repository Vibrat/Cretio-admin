import {Component, OnInit, ViewChildren} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { ckEditorConfig } from './data/article';
import { ApiService} from '../../../api.service';
import { FileUploadService } from '../../file-upload.service';
import { Location } from '@angular/common';

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
  public imagePost: any;
  public toasterCustom;

  constructor(private route: ActivatedRoute, private api: ApiService, private file: FileUploadService, private location: Location) {
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
          'content': new FormControl(this.editorValue, []),
          'date':   new FormControl ('', []),
          'category': new FormControl ( '',  [Validators.required]),
          'image': new FormControl ('', []),
          'images': new FormControl('', []),
          'seos': new FormArray([
              new FormControl('', []),
          ]),
          'seoTitle': new FormControl('', []),
          'seoDescription': new FormControl('', []),
          'seoImage': new FormControl('', [])
      });
  }

  get seos(): FormArray {
      return this.form.get('seos') as FormArray;
  }

  addSeo() {
      this.seos.insert(0, new FormControl());
  }

  removeSeo() {
      this.seos.removeAt(0);
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
      this.api.getData('https://hilapy-be.herokuapp.com/posts/' + this.slug).subscribe((response) => {
          if (response.meta.code == 200) {
              /**
               * Create seo links
               */

              for (let i = 0; i < (response.data.seo.length -1); i++) {
                  this.seos.push(new FormControl());
              }

              /**
               * Setting values for Form
               */

              this.form.patchValue({
                  title: response.data.title,
                  content: response.data.content,
                  image: response.data.image,
                  images: [],
                  category: '',
                  date: new Date(response.data.date).toISOString().split('T')[0],
                  seoTitle: '',
                  seoDescription: '',
                  seoImage: '',
                  seos: response.data.seo,
                  hidden: (!response.data.hidden).toString()
              });

              /**
               * Display images
               */

              this.imagePost = response.data.image;
          }
      });
  }

  onSubmit() {
      if (this.slug == null) {
          this.api.postData('https://hilapy-be.herokuapp.com/posts' + '?token=' + this.api.getToken(), this.form.value).subscribe((res) => {
              if (res.meta.code != 200) this.toasterCustom = {
                  type: 'error', title: 'Thông báo', message: 'Có lỗi xảy ra khi cập nhật'
              }; else this.toasterCustom = {type: 'success', title: 'Thông báo', message: 'Tạo bài viết thành công'};
          });
      } else {
          this.api.putData('https://hilapy-be.herokuapp.com/posts/' + this.slug + '?token=' + this.api.getToken(), this.form.value)
              .subscribe((res) => {
                  if (res.meta.code != 200) this.toasterCustom = {
                      type: 'error',
                      title: 'Thông báo',
                      message: 'Có lỗi xảy ra khi cập nhật'
                  }; else this.toasterCustom = {type: 'success', title: 'Thông báo', message: 'Cập nhật bài viết thành công'};
              });
      }


  }

  onEditorChange(event: string){
      /**
       * we will getcontent of the editor here.
       */
  }

  uploadImage(event) {
      /**
       * we will handle file upload here
       * @return url of the image
       */

      let files = event.target.files;

      this.file.post(files.item(0)).subscribe((response) => {
          this.urlValue = response.data.url;
      });
  }

  uploadMain(event) {
      /**
       * we will handle file upload here
       * @return url of the image
       */

      let files = event.target.files;
      this.file.post(files.item(0)).subscribe((response) => {
          this.imagePost = response.data;
          this.form.patchValue({ image: response.data });
      });
  }

  openImageExplorer(event): void{
     let fileMain = document.getElementById('fileMain');
     fileMain.click();
  }

  goBack() {
      this.location.back();
  }
}
