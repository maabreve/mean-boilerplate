import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingRulesEditComponent } from './containers/pricing-rules/edit/edit.component';
import { PricingRulesListComponent } from './containers/pricing-rules/list/list.component';
import { PricingRulesService } from './services/pricing-rules.service';
import { ClientService } from './services/client.service';
import { ProductService  } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    PricingRulesEditComponent,
    PricingRulesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [PricingRulesService, ClientService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
