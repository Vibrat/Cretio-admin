import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { NB_AUTH_TOKEN_CLASS, NbAuthJWTToken } from '@nebular/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { SecurityService } from './security.service';

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'socicon-twitter',
  },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          delay: 3000,
          baseEndpoint: 'https://hilapy-be.herokuapp.com/users',
          login: {
              method: 'post',
              endpoint: '/authenticate',
              redirect: {
                  success: '/',
              },
              showMessages: {
                  success: true,
                  error: true,
              },
              defaultErrors: ['Đăng nhập không thành công, vui lòng thử lại mật khẩu.'],
              defaultMessages: ['Thành công!'],
          },
          logout: {
              alwaysFail: false,
              endpoint: '/authenticate',
              method: 'post',
              redirect: {
                  success: '/auth/login',
                  failure: '/auth/login',
              },
          },
          register: {
              alwaysFail: false,
              rememberMe: true,
              endpoint: '',
              headers: { // add this key
                  'Content-Type': 'application/json; charset=utf-8',
              },
              method: 'post',
              redirect: {
                    success: '/',
                    failure: null,
              },
          },
          token: {
              key: 'data.token',
          },
          errors: {
              key: 'meta.message',
          },
          messages: {
              key: 'meta.message',
          },
        },
      },
    },
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,
  {
    provide: NbRoleProvider, useClass: SecurityService,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
  providers: [
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
