import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provideServerRendering, withRoutes } from '@angular/ssr';
import { withRoutes, provideServerRendering } from '@angular/ssr';
// import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    //provideServerRendering(withRoutes(serverRoutes))
    provideServerRendering(withRoutes(serverRoutes)),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
