import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./reducers/app.reducer";
import {AuthGuard} from "./guards/AuthGuard";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot(reducers),
    ),
    AuthGuard
  ]
};
