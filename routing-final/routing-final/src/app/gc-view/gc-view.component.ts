import { Component, OnInit, NgModule } from '@angular/core';
import { APIBaseAddress } from '../settings';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Pallet } from './../_models/models';

//Bootstrap Dependency
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gc-view',
  templateUrl: './gc-view.component.html',
  styleUrls: ['./gc-view.component.css']
})

@NgModule({

  imports: [NgbModule]
})




export class GcViewComponent implements OnInit {

  pallet_count: number;
  public selectedPalletId: string;
  public palletList: Pallet[] = [];
  public receiver: string = "";
  public receiverList: string[] = [];
  public palletObj: Pallet;
  public results: string;

  public getpallet(): Pallet {
    return this.palletList.find(x => x.palletId === this.selectedPalletId);
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


    this.httpClient.get(APIBaseAddress + "/org.example.biznet.Pallet").subscribe((data: any) => {
      for (const item of data) {
        this.palletList.push(item);
      }
      this.pallet_count = this.palletList.length;
    });

   

  }

  submitValue($event){

    this.palletObj = this.getpallet();

    this.results="";

    this.results = JSON.stringify(this.palletObj);



    console.log(this.palletObj);

    if(!this.results){

      this.results=" Palate is not belong to you!!"
    }

    event.preventDefault();


  }


}
