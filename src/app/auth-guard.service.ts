import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public user = {};

  constructor( private router: Router, private authService: NbAuthService ) {}

  canActivate() {
      return this.authService.isAuthenticated()
          .pipe(
              tap(authenticated => {
                  if (!authenticated) {
                      this.router.navigate(['auth/login']);
                  } else {
                      return true;
                  }
           }),
      );
  }
}
