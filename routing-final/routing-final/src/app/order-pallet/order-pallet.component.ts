import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order-pallet',
  templateUrl: './order-pallet.component.html',
  styleUrls: ['./order-pallet.component.css']
})
export class OrderPalletComponent implements OnInit {

  constructor() { }

  order = {

    companyName: "",
    quantatiy: null,
    leasingPeriod:null

  }

  ngOnInit() {
  }

  submitOrder(e){

    console.log("form is submited");
    console.log(this.order);

   this.order = {

      companyName: "",
      quantatiy: null,
      leasingPeriod:null
  
    }
  

    e.preventDefault();
  }

}
