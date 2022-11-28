import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit{
  @Input() username = '';
  @Input() password = '';
  @Input() register = '';

  constructor() {}

  ngOnInit() {}
}
