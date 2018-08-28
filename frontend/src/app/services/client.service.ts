import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityBaseService } from './entity.base.service';
import { ClientModel } from '../models/client.model';
import { CONFIG } from '../config/app.config';

@Injectable()

export class ClientService extends EntityBaseService<ClientModel> {
  constructor(http: HttpClient) {
    super(http, CONFIG.apiURL + 'clients');
  }
}
