import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpBackend, HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './service/apis.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: HttpClient
    },
    {
      provide: ApiService
    }
  ],
})
export class AppModule { }