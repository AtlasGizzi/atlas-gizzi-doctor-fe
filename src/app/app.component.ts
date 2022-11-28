import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() clicked = new EventEmitter<>(); //How to communicate to switch to different component?

  constuctor (private httpClient: HttpClient) {
    let request = httpClient.get("https://")
  }
  //two options for whether they are a doctor or a patient
  onPatientClick() {


  }

  onDoctorClick() {


  }
}


