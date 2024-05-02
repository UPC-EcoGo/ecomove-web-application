import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {UserManagementService} from "../../services/user-management.service";
@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.css'
})
export class MembershipsComponent {

  subscriptionPlans: any[];

  constructor(private userManagementService: UserManagementService) {
    this.subscriptionPlans = this.userManagementService.getSubscriptionPlans();
  }
}
