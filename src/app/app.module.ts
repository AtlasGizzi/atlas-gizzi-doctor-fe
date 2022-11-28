import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';
import { TimeComponent } from './time/time.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    WelcomeScreenComponent,
    DropdownComponent,
    WeekComponent,
    DayComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
