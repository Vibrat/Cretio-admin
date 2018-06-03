import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private api: ApiService) { }

  post(fileUpload): Observable<any> {
      const formData = new FormData();
      const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
      formData.append('file', fileUpload , fileUpload.name);

      return this.api.uploadFile('https://hilapy-be.herokuapp.com/fileupload', formData, headers);
  }
}
