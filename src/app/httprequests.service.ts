import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IIPAddress } from './CustomTypes';

@Injectable({
  providedIn: 'root'
})
export class HttprequestsService {

  constructor(private httpClient: HttpClient) { }

  $ip: Subject<string> = new Subject();

  getIPAddress()
  {
    //Setting up the request
    let request = this.httpClient.get<IIPAddress>("https://httpbin.org/ip")
    //Sending the request
    request.subscribe(
      {
        next:(ipObject: IIPAddress)=>
        {
          this.$ip.next(ipObject.origin);
        },
        error: (error: HttpErrorResponse)=>
        {
           this.$ip.next(" An error has occured connecting to the server")
        },
        complete: ()=>
        {

        }
      }
    );
  }

}
