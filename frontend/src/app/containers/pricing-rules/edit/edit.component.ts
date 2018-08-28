import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { ProductService } from '../../../services/product.service';
import { PricingRulesService } from '../../../services/pricing-rules.service';
import { ClientModel } from '../../../models/client.model';
import { ProductModel } from '../../../models/product.model';
import { PricingRulesModel } from '../../../models/pricing-rules.model';

@Component({
  selector: 'app-pricing-rules-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class PricingRulesEditComponent implements OnInit {
  clientList: Array<ClientModel>;
  productList: Array<ProductModel>;
  model: PricingRulesModel;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private pricingRulesService: PricingRulesService,
    private clientService: ClientService,
    private productService: ProductService) {

  }

  ngOnInit() {
    this.loadEntity();
    this.loadSelects();
  }

  loadEntity() {
    this.model = new PricingRulesModel();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.pricingRulesService.getById(id).subscribe(prs => {
        this.model = prs;
        console.log(prs);
      });
    }
  }

  onSubmit() {
    console.log(this.model);
    if (this.model._id) {
      this.pricingRulesService.update(this.model._id, this.model).subscribe(prs => {
        this.router.navigate(['/pricing-rules']);
      });
    } else {
      this.pricingRulesService.create(this.model).subscribe(prs => {
        this.router.navigate(['/pricing-rules']);
      });
    }
  }

  loadSelects() {
    this.clientService.getAll().subscribe(clientList => {
      this.clientList = clientList;
    });

    this.productService.getAll().subscribe(productList => {
      this.productList = productList;
    });
  }
}
