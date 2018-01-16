import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './reducers';
import { LinesDiscoveryEffects } from './effects/lines-discovery-effects';
import { StoppointsDiscoveryEffects } from './effects/stoppoints-discovery-effects';
import { SituationExchangeEffects } from './effects/situation-exchange-effects';
import { DataTablesDirective } from './directives/datatables.directive';
import { DataTablesService } from './services/datatables.service';
import { SituationExchangeService } from './services/situation-exchange.service';
import { LinesDiscoveryComponent } from './components/lines-discovery/lines-discovery.component';
import { StoppointsDiscoveryComponent } from './components/stoppoints-discovery/stoppoints-discovery.component';
import { SituationExchangeComponent } from './components/situation-exchange/situation-exchange.component';
import { SituationExchangeFormComponent } from './components/situation-exchange-form/situation-exchange-form.component';
import { DialogAnchorDirective } from './directives/dialog-anchor.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataTablesDirective,
    DialogAnchorDirective,
    LinesDiscoveryComponent,
    StoppointsDiscoveryComponent,
    SituationExchangeComponent,
    SituationExchangeFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LinesDiscoveryEffects, StoppointsDiscoveryEffects, SituationExchangeEffects]),
  ],
  providers: [DataTablesService, SituationExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
