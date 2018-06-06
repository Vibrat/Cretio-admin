import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private api: ApiService) { }

  post(fileUpload): Observable<any> {

      const formData = new FormData();
      // const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
      formData.append('filetoupload', fileUpload , fileUpload.name);
      formData.append('altimage', fileUpload.name);
      return this.api.uploadFile('https://hilapy-be.herokuapp.com/files/images?token=' + window.localStorage.getItem('auth_app_token'), formData, {} );
  }
}
