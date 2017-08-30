import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from "app/service/drop-down.service";
import { CapitalizePipe } from './capitalize.pipe';
import { SearchbyPipe } from './searchby.pipe';

@NgModule({
  declarations: [
    RootComponent,
    CapitalizePipe,
    SearchbyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DropDownService],
  bootstrap: [RootComponent]
})
export class AppModule { }
