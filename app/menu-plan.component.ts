 import {Component} from '@angular/core';
 import { Router } from '@angular/router-deprecated';
 
 @Component({
     selector: 'my-menu-plan',
     templateUrl: 'app/menu-plan.component.html',
     styleUrls: ['app/menu-plan.component.css']
 })

 export class MenuPlanComponent {
     constructor(
         private router: Router) {
     }
 }