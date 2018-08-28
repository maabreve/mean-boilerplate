import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingRulesEditComponent } from './containers/pricing-rules/edit/edit.component';
import { PricingRulesListComponent } from './containers/pricing-rules/list/list.component';

const routes: Routes = [ {
  path: '',
  component: PricingRulesListComponent
},
{
  path: 'pricing-rules/new',
  component: PricingRulesEditComponent
},
{
  path: 'pricing-rules/edit/:id',
  component: PricingRulesEditComponent
},
{
  path: 'pricing-rules',
  component: PricingRulesListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
