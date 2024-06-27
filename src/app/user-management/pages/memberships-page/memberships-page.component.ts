import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-memberships-page',
  standalone: true,
  imports: [HttpClientModule, NavbarComponent, FooterComponent, MatButton],
  templateUrl: './memberships-page.component.html',
  styleUrl: './memberships-page.component.css'
})
export class MembershipsPageComponent {

}
