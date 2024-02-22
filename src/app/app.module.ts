import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { DnaCardComponent } from './dna-card/dna-card.component';
import { FormComponent } from './generate-form/generate-form.component';
import { FormsModule } from '@angular/forms';
import { GridBuilderComponent } from './grid-builder/grid-builder.component';
import { SubmitGenomeComponent } from './submit-genome/submit-genome.component';
import { StatsComponent } from './stats/stats.component';
import { ListComponent } from './list/list.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    DnaCardComponent,
    FormComponent,
    GridBuilderComponent,
    SubmitGenomeComponent,
    StatsComponent,
    ListComponent,
    MainPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
