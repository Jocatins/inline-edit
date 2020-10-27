import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import {
  GridModule,
  PagerModule,
  PageService,
  SortService,
  FilterService,
  GroupService,
  EditService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { ProductDataService } from './product-data.service';
import {DateRangePickerModule} from '@syncfusion/ej2-angular-calendars'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GridModule,
    PagerModule,
    HttpClientModule,
    DateRangePickerModule,
    InMemoryWebApiModule.forRoot(ProductDataService),
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    ToolbarService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
