import { Component, VERSION } from '@angular/core';
import { ApiService } from './service/apis.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private apiService: ApiService) {  }
  public rep: JSON;

 ngOnInit() {
      this.apiService.getGordonBeach().subscribe((data: any)=>{
      this.rep = data 
    })
 }
}
