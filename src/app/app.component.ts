import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CarsComponent} from "./components/cars/cars.component";
import {UserComponent} from "./components/user/user.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CarsComponent, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proovAngular';
}
