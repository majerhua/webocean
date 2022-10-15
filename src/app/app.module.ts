import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnowledgeListComponent } from './components/list-knowledge/list-knowledge.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RegisterKnowledgeComponent } from './components/register-knowledge/register-knowledge.component';
import { ReportHistogramComponent } from './components/report-histogram/report-histogram.component';
import { PerformanceReportComponent } from './components/performance-report/performance-report.component';
import { IdentifiedSpeciesComponent } from './components/identified-species/identified-species.component';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgeListComponent,
    RegisterKnowledgeComponent,
    ReportHistogramComponent,
    PerformanceReportComponent,
    IdentifiedSpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
