import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
