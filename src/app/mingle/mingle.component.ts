import { Component, OnInit } from '@angular/core';

import { Card, Property, Properties } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';

//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mingle',
  templateUrl: './mingle.component.html',
  styleUrls: ['./mingle.component.css']
})



export class MingleComponent implements OnInit {

  card:any = {};
  properties:any = {};
  property:any=[];
    constructor(
                private dataService: DataService) { }
  
  
    ngOnInit() {
      this.dataService.getWeeklyReport()
      .subscribe(  (card: Card) => {
        console.log("message recieved by subscriber");
        this.card=card;
        this.property=card.properties.property;
      //  this.properties = card.properties ;
       console.log(this.property);
        
        console.log(this.card);
      });
    }
  
    submit() {
  
      
    }
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
