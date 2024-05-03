import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BookingService } from './../../services/booking/booking.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [MatPaginator, MatTableModule, HttpClientModule],
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
    this.getHistory("1");
  }

  getHistory(userId: any) {
    let bookingData;
    for (let i = 1; i <= 20; i++) {
      this.bookingService.getBooking(i).subscribe(
        (res: any) => {
          bookingData = {
            id: res.id,
            vehicleId: res.vehicleID,
            startDate: res.startTime,
            endDate: res.endTime,
            status: res.status,
          };

          if (userId == res.userID) {
            this.data.push(bookingData);
            this.dataSource = new MatTableDataSource<any>(this.data);
            this.dataSource.paginator = this.paginator;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
