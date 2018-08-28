import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityBaseService } from './entity.base.service';
import { ProductModel } from '../models/product.model';
import { CONFIG } from '../config/app.config';

@Injectable()

export class ProductService extends EntityBaseService<ProductModel> {
  constructor(http: HttpClient) {
    super(http, CONFIG.apiURL + 'products');
  }
}
