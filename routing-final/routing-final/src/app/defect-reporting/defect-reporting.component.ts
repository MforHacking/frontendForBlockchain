import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap, filter } from "rxjs/operators";
import 'rxjs/add/observable/interval';
import { Pallet } from './../_models/models';
import { APIBaseAddress } from '../settings';
import { element } from 'protractor';

@Component({
  selector: 'app-defect-reporting',
  templateUrl: './defect-reporting.component.html',
  styleUrls: ['./defect-reporting.component.css']
})
export class DefectReportingComponent implements OnInit {

  public selectedPalletId: string;
  public palletList: Pallet[] = [];
  public defectedpalletList: Pallet[] = [];
  public defectedListStr: string;




  constructor(private http: HttpClient) { }


  showDefected(e) {

    this.defectedListStr = JSON.stringify(this.defectedpalletList);

    alert(this.defectedListStr);

    e.preventDefault();
  }



  ngOnInit() {


    this.http.get(APIBaseAddress + "/org.example.biznet.Pallet").subscribe((data: any) => {
      for (const item of data) {
        this.palletList.push(item);
      }

      this.palletList.forEach(element => {
        if (element.PalletStatus !== "InUse")
          this.defectedpalletList.push(element);
      });

    });
  }
}

