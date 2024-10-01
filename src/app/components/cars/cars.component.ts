import {Component, OnInit} from "@angular/core";
import {UserCarService} from "../../services/user-car.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cars.component.html',
})
export class CarsComponent implements OnInit {

  cars: any[] = [];
  searchMake: string = '';
  sortField: string = 'make';
  sortDirection: string = 'asc';
  searchId: number | null = null;

  constructor(private userCarService: UserCarService) {
  }

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.userCarService.getCars(this.searchMake, `${this.sortField}:${this.sortDirection}`)
      .subscribe(data => {
        this.cars = data;
      });
  }

  onSearch(): void {
    this.fetchCars();
  }

  onSearchById(): void {
    if (this.searchId) {
      this.userCarService.getCarById(this.searchId).subscribe(
        (car) => {
          this.cars = [car];
        },
        (error) => {
          //implement error logging
          this.cars = [];
        }
      );
    }
  }

  onSort(field: string): void {
    this.sortField = field;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.fetchCars();
  }
}
