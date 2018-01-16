import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinesDiscoveryComponent } from './components/lines-discovery/lines-discovery.component';
import { StoppointsDiscoveryComponent } from './components/stoppoints-discovery/stoppoints-discovery.component';
import { SituationExchangeComponent } from './components/situation-exchange/situation-exchange.component';

const routes: Routes = [
  { path: '', redirectTo: '/lines-discovery', pathMatch: 'full' },
  { path: 'lines-discovery', component: LinesDiscoveryComponent },
  { path: 'stoppoints-discovery', component: StoppointsDiscoveryComponent },
  { path: 'situation-exchange', component: SituationExchangeComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})

export class AppRoutingModule { }