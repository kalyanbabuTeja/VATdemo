import { ApplicationConfig, provideZoneChangeDetection,importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormlyMaterialModule } from '@ngx-formly/material';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(
      ReactiveFormsModule,
      FormlyModule.forRoot(),           
      FormlyBootstrapModule,
      FormlyMaterialModule  
    )]
};
