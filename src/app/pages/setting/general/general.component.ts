import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FileUploadService} from '../../file-upload.service';

@Component({
  selector: 'general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  public form: FormGroup;
  private fileUpload = null;
  constructor( private uploadService: FileUploadService ) {
    this.form = new FormGroup({
        'name':         new FormControl('', [Validators.required]),
        'address':      new FormControl('', [Validators.required]),
        'phone':        new FormControl('', [Validators.required]),
        'fax':          new FormControl('', ),
        'email':        new FormControl('', [Validators.email]),
        'time':         new FormControl('', []),
        'logo':         new FormControl('', []),
        'fabicon':      new FormControl('', []),
        'maintainance': new FormControl('' , []),
        'facebook':     new FormControl( '', []),
        'instagram':    new FormControl ('', []),
        'twitter':      new FormControl('', []),
        'zalo':         new FormControl('', []),
        'seoTitle':     new FormControl('', []),
        'seoDes':       new FormControl('', []),
        'seoImage':     new FormControl('', []),
        'method':       new FormControl('', []),
        'hostname':     new FormControl('', []),
        'username':     new FormControl('', []),
        'password':     new FormControl('', []),
        'port':         new FormControl('', []),
        'setTimeOut':   new FormControl('', []),
    });
  }

  onChangeImage(event): any {

   /**
    *  Binding files to be uploaded
    *  In case there more files use loop to upload files
    */

    const files = event.target.files;
    this.fileUpload = files.item(0);
    this.uploadService.post(this.fileUpload).subscribe();
  }

  onSubmit() {
      /**
       * This is where we call HttpClient to submit form to
       * Pass this.form.value to post as Json
       */
      window.console.log(this.form.value);
  }

  ngOnInit() {}
}
