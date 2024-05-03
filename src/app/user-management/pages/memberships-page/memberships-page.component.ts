import { Component, OnInit } from '@angular/core';
import { MembershipsService } from '../../services/memberships/memberships.service';
import { Router } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';

@Component({
  selector: 'app-memberships-page',
  standalone: true,
  imports: [HttpClientModule, NavbarComponent, FooterComponent],
  templateUrl: './memberships-page.component.html',
  styleUrl: './memberships-page.component.css'
})
export class MembershipsPageComponent implements OnInit {
  memberships: any = [];

  constructor(private membershipsService: MembershipsService, private router: Router) { }
  ngOnInit(): void {
    this.membershipsService.getMemberships().subscribe((data) => {
      this.memberships = data;
    });
  }
}
