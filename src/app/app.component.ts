import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'master-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  router: Router;
  constructor(router: Router){
    this.router = router;
  }
  route(routeLocation: any){
    // if we aren't currently on the page we are trying to route to...
    if (!window.location.toString().includes(routeLocation[0])) {
      this.router.navigate(routeLocation);
    }
  }
}
