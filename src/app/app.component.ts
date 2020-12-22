import { Component, VERSION } from '@angular/core';
import { ApiService } from './service/apis.service';

class testApi {
  constructor(
    public test: string,
  ) {}
}

class BeachInfo {
  constructor(
    public ENTEROCOCC_DATE: Date,
    public ENTEROCOCC_RESULTS_MAX: string,
    public blue_flag: string
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
            
          let attributes = data.features[0].attributes

          this.gordon = JSON.stringify(
            data.features[0].attributes
          )

          var entrococDate = new Date(0); 
          entrococDate.setUTCMilliseconds(attributes.ENTEROCOCC_DATE);
          
          this.gordonB = new BeachInfo(entrococDate,
          attributes.ENTEROCOCC_RESULTS_MAX, 
          attributes.blue_flag)
        }

        )
 }
}
