import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, disableDeprecatedForms(),
  provideForms()]);


