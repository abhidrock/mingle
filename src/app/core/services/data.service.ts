import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/Rx';



import { Card } from '../../shared/interfaces';
const httpOptions = {
  headers: new HttpHeaders()
};
@Injectable()
export class DataService {

    customersBaseUrl: string = '/api/customers';
    ordersBaseUrl: string = '/api/orders';
  weeklyReportUrl: string='http://localhost:8080/get/carddetails';
 // weeklyReportUrl: string='https://esusich:Venus904!@mingle.epk.ericsson.se/api/v2/projects/classic_sdp/cards/3120.xml';
  //weeklyReportUrl: string='http://localhost:8080/hello';
    

    constructor( private http: HttpClient) {

    }



  getWeeklyReport() : Observable<Card>{


      console.log("going to cosume ....get api");
 //   console.log(this.http.get<IWeek>(this.weeklyReportUrl,httpOptions  ));

    let username: string = 'esusich';
    let password: string = 'Venus904!';
    let myheaders: HttpHeaders = new HttpHeaders();

   // myheaders.append("Authorization", "Basic " + btoa(username + ":" + password));

   /* myheaders.append( "Accept" ,"*!/!*");
    myheaders.append('Access-Control-Allow-Headers', 'Content-Type');
    myheaders.append('Access-Control-Allow-Methods', 'OPTION');
    myheaders.append('Access-Control-Allow-Origin', 'http://localhost:8080');*/
   // httpOptions.headers=myheaders;
 /*, { headers: myheaders }));*/
  
 return this.http.get<Card>(this.weeklyReportUrl, { headers: myheaders } );


  }

   
   
    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

   
  private extractData(res: Response) {
    let body = res.json();

    console.log("extract data .." + body);
    return body;
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
    //Not using now but leaving since they show how to create
    //and work with custom observables

    //Would need following import added:
    //import { Observer } from 'rxjs/Observer';

    // createObservable(data: any): Observable<any> {
    //     return Observable.create((observer: Observer<any>) => {
    //         observer.next(data);
    //         observer.complete();
    //     });
    // }

}
