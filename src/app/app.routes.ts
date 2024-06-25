import { Routes } from '@angular/router';
import { HomePageComponent } from './public/pages/home-page/home-page.component';
import { LoginPageComponent } from "./user-management/pages/login-page/login-page.component";
import { RegisterPageComponent } from "./user-management/pages/register-page/register-page.component";
import { MembershipsPageComponent } from "./user-management/pages/memberships-page/memberships-page.component";
import { VehiclePageComponent } from "./vehicle-management/pages/vehicles-page/vehicle-page.component";
import { ReservationPageComponent } from './booking-reservation/pages/reservation-page/reservation-page.component';
import { SettingsPageComponent } from "./user-management/pages/settings-page/settings-page.component";
import { AvailabilityPageComponent } from './vehicle-management/pages/availability-page/availability-page.component';
import { BookingPageComponent } from './booking-reservation/pages/booking-page/booking-page.component';
import { ConfirmationPageComponent } from './booking-reservation/pages/confirmation-page/confirmation-page.component';
import { HistoryPageComponent } from './booking-reservation/pages/history-page/history-page.component';
import { MethodsPageComponent } from './payment/pages/methods-page/methods-page.component';
import { AlertsPageComponent } from './customer-support/pages/alerts-page/alerts-page.component';
import { SupportPageComponent } from './customer-support/pages/support-page/support-page.component';
import {InputCardComponent} from "./payment/components/input-card/input-card.component";
import {CardConfirmationPageComponent} from "./payment/pages/card-confirmation-page/card-confirmation-page.component";
import {ProblemReportPageComponent} from "./customer-support/pages/problem-report-page/problem-report-page.component";
import {UpReviewPageComponent} from "./user-management/pages/up-review-page/up-review-page.component";
import {PreferencesPageComponent} from "./user-management/pages/preferences-page/preferences-page.component";
import {
  ConfirmationReviewPageComponent
} from "./user-management/pages/confirmation-review-page/confirmation-review-page.component";
import {
  ConfirmationReportPageComponent
} from "./customer-support/pages/confirmation-report-page/confirmation-report-page.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component:  LoginPageComponent },
  { path: 'register', component:  RegisterPageComponent },
  { path: 'memberships', component:  MembershipsPageComponent },
  { path: 'vehicles', component:  VehiclePageComponent},
  { path: 'reservation', component:  ReservationPageComponent },
  { path: 'settings', component:  SettingsPageComponent },
  { path: 'available-vehicles', component:  AvailabilityPageComponent },
  { path: 'booking', component: BookingPageComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: 'history', component:  HistoryPageComponent },
  { path: 'methods', component: MethodsPageComponent },
  {path: 'preferences', component: PreferencesPageComponent},
  { path: 'alerts', component: AlertsPageComponent},
  { path: 'support', component: SupportPageComponent },
  { path: 'input-card', component: InputCardComponent},
  { path: 'confirmation-card-page', component: CardConfirmationPageComponent},
  { path: 'problem-report', component: ProblemReportPageComponent},
  { path: 'reviews', component: UpReviewPageComponent},
  { path: 'confirmation-review', component: ConfirmationReviewPageComponent},
  {path: 'confirmation-report-page', component: ConfirmationReportPageComponent},
  { path: '**', redirectTo: '/home' },
];
