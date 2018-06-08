import { Component, OnInit } from '@angular/core';
import { SourceData, Settings } from './data/partners';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  private data: SourceData[] = [];
  private settings = Settings;
  private source: LocalDataSource = new LocalDataSource();

  constructor( private api: ApiService) {
      this.api.getData('https://hilapy-be.herokuapp.com/partners?offset=0').subscribe((res) => {
            if (typeof res == 'undefined') throw new Error('api not exist');
            let arrayData = res.data;
            for ( let i = 0; i < arrayData.length; i++) {
                this.data.push({
                    id: arrayData[i]._id,
                    name: arrayData[i].name,
                    image: arrayData[i].image,
                    url: arrayData[i].url
                });
            }

            this.source.load(this.data);
      });
  }

  ngOnInit() {}

}
