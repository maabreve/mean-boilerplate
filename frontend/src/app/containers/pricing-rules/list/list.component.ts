import { Component, OnInit } from '@angular/core';
import { PricingRulesService } from '../../../services/pricing-rules.service';
import { PricingRulesModel } from '../../../models/pricing-rules.model';

@Component({
  selector: 'app-pricing-rules-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PricingRulesListComponent implements OnInit {

  pricingRulesList: PricingRulesModel[];

  constructor(private pricingRulesService: PricingRulesService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.pricingRulesService.getAll().subscribe(prl => {
      this.pricingRulesList = prl;
      console.log(prl)
    });

  }
}
