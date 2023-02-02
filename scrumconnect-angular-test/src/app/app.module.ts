import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { DefaultRouterStateSerializer } from '@ngrx/router-store';
import { CommonContentEffects } from 'src/shared/store/effects/common-content.effects';
import { reducers, metaReducers } from 'src/shared/store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppSandbox } from './app.sanbbox';
import { CommonApiClient } from 'src/shared/service/common-api-client.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {strictActionImmutability: true, strictStateImmutability: true}
    }),
    EffectsModule.forRoot([CommonContentEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: DefaultRouterStateSerializer,
      stateKey: 'router'
    })

  ],
  providers: [
    AppSandbox,
    CommonApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
