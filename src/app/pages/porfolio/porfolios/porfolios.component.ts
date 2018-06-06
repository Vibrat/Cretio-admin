import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Settings, Entry, SourceData } from './data/porfolios';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'porfolios',
  templateUrl: './porfolios.component.html',
  styleUrls: ['./porfolios.component.scss']
})
export class PorfoliosComponent implements OnInit {
  public  data: SourceData[] = [];
  public  settings = Settings;
  public  entry = Entry;
  private source = new LocalDataSource();

  constructor(private route: Router, private api: ApiService) {
    this.api.getData('https://hilapy-be.herokuapp.com/posts?offset=1&limit=3').subscribe((data) => {
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

  ngOnInit() {}

  onDeleteConfirm(event) {
      /**
       * function handle when delete a row
       * @property event has two object:
       * @property data : Object row selected data
       * @property source: DataSource to be used
       */
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

  onCreateConfirm(event) {
      /**
       * Function handle when create new value
       */
  }

  onEditConfirm(event) {
      /**
       * function handle when Edit a value in a row
       */

      this.route.navigateByUrl('pages/porfolio/edit/' + event.data.id, {skipLocationChange: false});
  }
}
