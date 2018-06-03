import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';

@Injectable({
  providedIn: 'root'
})
export class SecurityService implements NbRoleProvider {

  constructor( private authService: NbAuthService) {
      this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
          if (token.isValid()) {
              /**
               * Token check setInterval will start here
               */
              // window.location = '/#/auth/logout';
              window.console.log(token.token);
          }
      });

  }

   getRole(): Observable<string> {
        return this.authService.onTokenChange()
            .pipe(
                map((token: NbAuthJWTToken) => {
                    // return token.isValid() ? token.getPayload()['role'] : 'guest';
                    return 'guest';
            }),
       );
   }
}
