import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  GridModule,
  PagerModule,
  PageService,
  SortService,
  FilterService,
  GroupService,
} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GridModule, PagerModule],
  providers: [PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
