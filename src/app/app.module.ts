import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';
import { ColorpatchComponent } from './colorpatch/colorpatch.component';
import { ColorPatchPipe } from './pipes/colorpatchPipe';
import { CitiesOverviewComponent } from './cities-overview/cities-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorpatchesComponent,
    ColorpatchComponent,
    ColorPatchPipe,
    CitiesOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
