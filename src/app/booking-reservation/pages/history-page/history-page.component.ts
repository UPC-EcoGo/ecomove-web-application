import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BookingService } from './../../services/booking/booking.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [MatPaginator, MatTableModule, HttpClientModule, NavbarComponent, FooterComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})

export class HistoryPageComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  displayedColumns: string[] = [
    'id',
    'vehicleId',
    'startDate',
    'endDate',
    'status',
  ];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(!user) {
      this.router.navigate(['/login']);
    }
    this.getHistory(user.id);
  }

  getHistory(userId: any) {
    let bookingData;
      this.bookingService.getBookings().subscribe(
        (res: any) => {
          res.forEach((element: any) => {
            if (element.userID == userId) {
              bookingData = {
                id: element.id,
                vehicleId: element.vehicleID,
                startDate: element.startTime,
                endDate: element.endTime,
                status: element.status,
              };
              this.data.push(bookingData);
              this.dataSource = new MatTableDataSource<any>(this.data);
              this.dataSource.paginator = this.paginator;
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
    
  }
}
