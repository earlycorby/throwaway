import {Component} from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-shopping-list',
    templateUrl: 'app/shopping-list.component.html',
    styleUrls: ['app/shopping-list.component.css']
})

export class ShoppingListComponent {
    constructor(
        private router: Router) {
    }
    
}