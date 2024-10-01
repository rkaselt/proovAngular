import {Component, OnInit} from "@angular/core";
import {UserCarService} from "../../services/user-car.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  searchId: number | null = null;
  users: any[] = [];
  searchName: string = '';
  sortField: string = 'name';
  sortDirection: string = 'asc';

  constructor(private userCarService: UserCarService) {
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userCarService.getUsers(this.searchName, `${this.sortField}:${this.sortDirection}`)
      .subscribe(data => {
        this.users = data;
      });
  }

  onSearch(): void {
    this.fetchUsers();
  }

  onSearchById() {
    if (this.searchId) {
      this.userCarService.getUserById(this.searchId).subscribe(
        (user) => {
          this.users = [user];
        },
        (error) => {
          console.error('User not found', error);
          this.users = [];
        }
      );
    }
  }

  onSort(field: string): void {
    this.sortField = field;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.fetchUsers();
  }
}
