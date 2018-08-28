/**
 * Entity Cllient
 * name: client name 
 */

import mongoose = require("mongoose");

export let Schema = mongoose.Schema;

export default interface IClientModel extends mongoose.Document {
    name: string;
}

let schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export let ClientModel  = mongoose.model<IClientModel>('client', schema, 'Clients', true);