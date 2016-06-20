  import {Component} from '@angular/core';
  import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

  import {MenuPlanComponent} from './menu-plan.component';
  import {ShoppingListComponent} from './shopping-list.component';
  import {InventoryComponent} from './inventory.component';
  import {InventoryService} from './inventory.service';







































































  @Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['MenuPlan']">Menu Plan</a>
            <a [routerLink]="['Inventory']">Inventory</a>
            <a [routerLink]="['ShoppingList']">Shopping List</a>
        </nav>
        <router-outlet></router-outlet>
      `,
      styleUrls: ['app/app.component.css'],
      directives: [ROUTER_DIRECTIVES],
      providers: [
          ROUTER_PROVIDERS
      ]
  })


  @RouteConfig([
      {
          path: '/menuplan',
          name: 'MenuPlan',
          component: MenuPlanComponent,
          useAsDefault: true
      },
      {
          path: '/shoppinglist',
          name: 'ShoppingList',
          component: ShoppingListComponent
      },
      {
          path: '/inventory',
          name: 'Inventory',
          component: InventoryComponent,
         // service: InventoryService
      }
  ])
  export class AppComponent {
      title = 'My Menu Planner';
  }