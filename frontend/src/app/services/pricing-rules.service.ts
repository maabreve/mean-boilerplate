import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityBaseService } from './entity.base.service';
import { PricingRulesModel } from '../models/pricing-rules.model';
import { CONFIG } from '../config/app.config';

@Injectable()

export class PricingRulesService extends EntityBaseService<PricingRulesModel> {
  constructor(http: HttpClient) {
    super(http, CONFIG.apiURL + 'pricing-rules/');
  }
}
