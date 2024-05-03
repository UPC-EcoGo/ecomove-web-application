import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from '@abacritt/angularx-social-login';
import { provideHttpClient, withFetch} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "120586616949-8nj2cer3vkq9vtsuq8s2tj58pjdg83qj.apps.googleusercontent.com"
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("405657132274837")
          }
        ],
        onError: (err) => {
          debugger;
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ]
};
