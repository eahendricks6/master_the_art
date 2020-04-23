import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MenuBarComponent } from './menu-bar.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 // { path: '', component: AppComponent },
  { path: "", redirectTo: '', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  {path: '**' , redirectTo: '', pathMatch: "full" },
];
const extraOptions: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  scrollPositionRestoration: 'top',
  // enableTracing: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
