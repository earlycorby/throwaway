import { Injectable } from '@angular/core';

import { Inventory } from './inventory';
import { INVENTORY } from './mock-inventory';


@Injectable()
export class InventoryService {
    getInventory() {
        return Promise.resolve(INVENTORY);
    }
}