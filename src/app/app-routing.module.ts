import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./components/user/user.component";
import {CarsComponent} from "./components/cars/cars.component";

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'cars', component: CarsComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
