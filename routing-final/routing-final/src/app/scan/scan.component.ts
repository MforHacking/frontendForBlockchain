import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { APIBaseAddress } from '../settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  public selectedPalletId: string;
  public palletList: Pallet[] = [];
  public receiver: string = "";
  public receiverList: string[] = [];

  public get pallet(): Pallet {
    return this.palletList.find(x => x.palletId === this.selectedPalletId);
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpClient.get(APIBaseAddress + "/org.example.biznet.Company").subscribe((data: any) => {
      for (const item of data) {
        this.receiverList.push(item.companyName);
      }
    });

    this.httpClient.get(APIBaseAddress + "/org.example.biznet.Pallet").subscribe((data: any) => {
      for (const item of data) {
        this.palletList.push(item);
      }
    });
  }

  scanPallet() {

    const payload = {
      "$class": "org.example.biznet.ScanPallet",
      "sender": this.pallet.currentOwner,
      "receiver": this.receiver,
      "pallet": this.pallet.palletId
    };
    console.log(this.pallet);
    this.httpClient.post(APIBaseAddress + "/org.example.biznet.ScanPallet", payload).subscribe((data: any) => {
        alert("Pallet has been scanned.");
        this.router.navigateByUrl("/", { skipLocationChange: true });
    }, error => {
      alert("Pallet could not be found. Is the serial no. correct?");
    });
  }

}

interface Pallet {
  palletId: string,
  currentOwner: string
}