import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  subscriptionPlans: any[] = [
    { id: 1, name: 'Membresia Estandar', price: 'S/24.90 al mes', position: '1' },
    { id: 2, name: 'Membresia Premium', price: 'S/39.90 al mes', position: '2'  },
    { id: 3, name: 'Membresia Elite', price: 'S/59.90 al mes', position: '3'  },
  ]
  constructor() { }

  getSubscriptionPlans() {
    return this.subscriptionPlans;
  }
}
