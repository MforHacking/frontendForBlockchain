import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test-rest-api',
  templateUrl: './test-rest-api.component.html',
  styleUrls: ['./test-rest-api.component.css']
})
export class TestRestApiComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) { }
  ngOnInit() {

    this.http.get('https://31882be0.ngrok.io/api/org.example.biznet.Company').subscribe(data => {
      console.log(data);
      this.data=data;
    });

  }

}
