import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defect-reporting',
  templateUrl: './defect-reporting.component.html',
  styleUrls: ['./defect-reporting.component.css']
})
export class DefectReportingComponent implements OnInit {

  defect: any = {

    reason: "",
    borrower: "",
    palletSrno:"",
    palletDeffectDesc:""
  }

  constructor() { }

  reportDefact(e){
   
    console.log(this.defect);


   this.defect = {

      reason: "",
      borrower: "",
      palletSrno:"",
      palletDeffectDesc:""
    }


    e.preventDefault();
  }

  ngOnInit() {
  }

}
