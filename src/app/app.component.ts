import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { ProductStoreService } from './product-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'syncgrid';
  public products: Observable<DataStateChangeEventArgs>;
  constructor(public productservice: ProductStoreService) {
    this.products = productservice;
  }
  ngOnInit() {
    const state: any = { skip: 0, take: 5 };
    this.productservice.execute(state);
  }
}
