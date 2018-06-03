import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Source, Settings, Entry } from './data/sliders';
import { Router } from '@angular/router';

@Component({
  selector: 'porfolios',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {
  public data = Source;
  public settings = Settings;
  public entry = Entry;
  private source = new LocalDataSource();

  constructor(private route: Router) {
    this.source.load(this.data);
  }

  ngOnInit() {

  }

  onDeleteConfirm(event) {
      /**
       * function handle when delete a row
       */
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

      this.route.navigateByUrl('pages/sliders/edit/something', {skipLocationChange: false});
  }
}
