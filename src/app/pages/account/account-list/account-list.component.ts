import { Component  } from '@angular/core';
import { AccountListDataService } from '../account-list-data.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Settings, Text } from './data/acount-list-data';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent {

  source: LocalDataSource = new LocalDataSource();
  settings = Settings;
  text = Text;

  constructor( private accountService: AccountListDataService ) {
     const data = this.accountService.getData();
     this.source.load(data);
  }

  onDeleteConfirm(event): void {
       if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
       } else {
            event.confirm.reject();
       }
  }

    /**
     * @param event contains
     * @property data Object Original Data
     * @property newData Object Edited Data
     * @property source Table data source
     * @property confirm method includes: resolve() & reject()
     */

  onCreateConfirm(event): void {
      // We we'll call API here
      if (window.confirm('Are you sure you want to Create?')) {
          event.confirm.resolve();
      } else {
          event.confirm.reject();
      }
  }

  onEditConfirm(event): void {
      // We we'll call API here
      if (window.confirm('Are you sure you want to Create?')) {
          event.confirm.resolve();
      } else {
          event.confirm.reject();
      }
  }
}
