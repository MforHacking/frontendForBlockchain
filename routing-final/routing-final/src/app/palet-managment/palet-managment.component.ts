import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palet-managment',
  templateUrl: './palet-managment.component.html',
  styleUrls: ['./palet-managment.component.css']
})
export class PaletManagmentComponent implements OnInit {

  history:any = {
    companyName: ""
  }

  constructor() { }

  ngOnInit() {

    this.history.companyName="";
  }

  displayRecords(){

    console.log(this.history.companyName);

  }

}
