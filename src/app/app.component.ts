import { Component, VERSION } from '@angular/core';
import { ApiService } from './service/apis.service';

class testApi {
  constructor(
    public test: string,
  ) {}
}

class BeachInfo {
  constructor(
    public fecalEntracock: string,
  ) {}
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  constructor(private apiService: ApiService) {  }
  public rep: testApi;

  public gordon: string;

  public gordonB: BeachInfo

 ngOnInit() {
      this.apiService.getSomeApi().subscribe(
        (data: any) => 
        this.rep = data
        )

        this.apiService.getGordonBeach().subscribe(
          (data: any) =>{
          this.gordon = JSON.stringify(data)
          }
        )
 }
}
