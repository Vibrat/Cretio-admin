import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Settings, SourceData } from './data/data-articles';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})

export class ArticlesComponent implements OnInit {
  public source: LocalDataSource = new LocalDataSource();
  public settings = Settings;
  public data: SourceData[] =[];

  constructor(private router: Router, private api: ApiService) {
      this.api.getData('https://hilapy-be.herokuapp.com/posts?offset=0&limit=10').subscribe((data) => {
          let arrayData = data.data;
          for ( let i = 0; i < arrayData.length; i++ ) {
              this.data.push({
                  id: arrayData[i]._id,
                  title: arrayData[i].title,
                  image: '<img src="' + arrayData[i].image.url + '" class="img-fluid custom-img">',
                  activation: arrayData[i].hidden,
                  order: arrayData[i].__v
              });
          }
          this.source.load(this.data);
      }, (error) => {
          this.api.redirectLogin();
      });
  }

  ngOnInit() {
  }

  onCreate(event) {
      /**
       * @property skipLocationChange if true then navagate without changing url
       */

      this.router.navigateByUrl('pages/posts/new', { skipLocationChange: false });
  }

  onEdit(event) {
      /**
       * function handle when Edit a value in a row
       */

      this.router.navigateByUrl('pages/posts/edit/' + event.data.id, {skipLocationChange: false});
  }

  onDelete(event) {
      if (window.confirm('Are you sure you want to delete?')) {
          this.api.deleteData('https://hilapy-be.herokuapp.com/posts/' + event.data.id + '?token=' + this.api.getToken()).subscribe((response)=> {
              if(response.meta.code == 200) {
                  this.source.remove(event.data);
              }
          });
      } else {
          event.confirm.reject();
      }
  }
}
