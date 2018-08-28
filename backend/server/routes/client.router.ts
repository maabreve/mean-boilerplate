import { ClientRepository } from '../repositories/client.repository';
import { ClientModel } from '../models/client.model';
import express = require('express');
import { ClientController } from '../controllers/client.controller';
import { ClientService } from '../services/client.service';

export class ClientRouter {

    private _router: express.Router;
    private _app: any;
    
    constructor(router: express.Router) {
        this._router = router;
        this._app = express();
    }

    createRoutes() {
        var clientRepository = new ClientRepository(ClientModel);
        var clientService = new ClientService(clientRepository);
        var clientController = new ClientController(clientService);
        
        this._router.get('/api/clients', clientController.getAll.bind(clientController));
        this._router.get('/api/clients/:id', clientController.getById.bind(clientController));
        this._router.post('/api/clients', clientController.create.bind(clientController));
        this._router.put('/api/clients', clientController.update.bind(clientController));
        this._router.delete('/api/clients/:id', clientController.delete.bind(clientController));
    }
}
