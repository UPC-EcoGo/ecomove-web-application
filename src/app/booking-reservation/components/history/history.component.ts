import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HistoryService } from '../../services/history.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatPaginator, MatTableModule, HttpClientModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'vehicleId', 'startDate', 'endDate','status'];

  data:any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  constructor(private HistoryServices: HistoryService){

  }

  ngOnInit():void{
    this.getHistory("1")
  }


  getHistory(userId:any){
    let bookingData;
    for(let i = 1; i <= 20; i++){
      this.HistoryServices.getBookings(i).subscribe(
        res => {
       bookingData = {
        id: res.id,
        vehicleId: res.vehicleID,
        startDate: res.startTime,
        endDate: res.endTime,
        status: res.status
       };

       if (userId == res.userID){
        this.data.push(bookingData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
       }
      },
          error => {
          console.log(error);
        }
      );
    }
  }

}
