import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./mingle.component.css']
})



export class CarouselComponent implements OnInit {


  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   }

  }

