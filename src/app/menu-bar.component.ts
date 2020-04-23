import {Component} from '@angular/core';
import { Router } from '@angular/router';
/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.css'],
})
export class MenuBarComponent {
  router: Router;
  constructor(router: Router){
    this.router = router;
  }
  route(routeLocation: any){
    console.log(routeLocation);
    // if we aren't currently on the page we are trying to route to...
    if (!window.location.toString().includes(routeLocation[0])) {
      this.router.navigate(routeLocation);
    }
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */