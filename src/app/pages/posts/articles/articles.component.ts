import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Settings, Data } from './data/data-articles';
import { Router } from '@angular/router';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})

export class ArticlesComponent implements OnInit {
  public source: LocalDataSource = new LocalDataSource();
  public settings = Settings;
  public data = Data;

  constructor(private router: Router) { this.source.load(this.data); }

  ngOnInit() {
  }

  onCreate(event) {
      /**
       * @property skipLocationChange if true then navagate without changing url
       */

      this.router.navigateByUrl('pages/posts/new', { skipLocationChange: false });
  }

  onEdit(event) {
      window.console.log('on Edit');
  }

  onDelete(event) {
      window.console.log('oke dookie delete');
      this.source.remove(event.data);
      /**
       * Put your HttpClient and remove here
       */
  }
}
