import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PanelAComponent } from './components/panel-a/panel-a.component';
import { PanelBComponent } from './components/panel-b/panel-b.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelAComponent,
    PanelBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
