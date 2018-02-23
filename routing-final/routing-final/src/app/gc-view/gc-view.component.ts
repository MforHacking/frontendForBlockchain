import { Component, OnInit, NgModule } from '@angular/core';


//Bootstrap Dependency
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gc-view',
  templateUrl: './gc-view.component.html',
  styleUrls: ['./gc-view.component.css']
})

@NgModule({

  imports: [NgbModule]
})

export class GcViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
