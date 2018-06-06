import { Component, Input, OnChanges} from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnChanges {
    /**
     * There are 3 types of toast: success, error, warning
     */
  @Input() toaster: object;

  public config: ToasterConfig = new ToasterConfig({
      showCloseButton: true, tapToDismiss: false, timeout: 0
  });

  constructor(private toast: ToasterService) {}

  ngOnChanges(changes: SimpleChanges) {
      let res = changes.toaster.currentValue;
      if (typeof res != 'undefined') this.toast.popAsync(res.type, res.title, res.message);
  }
}
