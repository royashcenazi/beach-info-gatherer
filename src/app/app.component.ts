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
    public blue_flag: string,
    public FEACAL_COLIFORM_DATE: Date,
    public FEACAL_COLIFORM_RESULTS_MAX: string
  ) {}
}

class WaveHeight {
  constructor(
    public minHeight: number,
    public maxHeight: number
  ){}
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

  public taWeather: string

  public waveInfo: WaveHeight

 ngOnInit() {
      this.apiService.getSomeApi().subscribe(
        (data: any) => 
        this.rep = data
        )

        this.apiService.getGordonBeachPullotion().subscribe(
          (data: any) =>{
            
          let attributes = data.features[0].attributes

          this.gordon = JSON.stringify(
            data.features[0].attributes
          )

          var entrococDate = new Date(0); 
          entrococDate.setUTCMilliseconds(attributes.ENTEROCOCC_DATE);

          var fecalDate = new Date(0); 
          fecalDate.setUTCMilliseconds(attributes.FEACAL_COLIFORM_DATE);
          
          this.gordonB = new BeachInfo(entrococDate,
          attributes.ENTEROCOCC_RESULTS_MAX, 
          attributes.blue_flag, fecalDate, attributes.FEACAL_COLIFORM_RESULTS_MAX)
        }
      )

      this.apiService.getTelAvivBeachWaves().subscribe(
        (data: any) => {
          var wavesArray = data.waveData
          var minHeight = wavesArray[0].min
          var maxHeight = wavesArray[0].max
          for (let i = 0; i < 8; i++) {
             minHeight = Math.min(minHeight, wavesArray[i].min)
             maxHeight = Math.max(maxHeight, wavesArray[i].max, wavesArray[i].height)
          }
          this.taWeather = JSON.stringify(wavesArray)
          this.waveInfo = new WaveHeight(minHeight, maxHeight)
        }
      )

 }
}
