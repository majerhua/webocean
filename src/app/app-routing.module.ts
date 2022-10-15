import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeListComponent } from './components/list-knowledge/list-knowledge.component';
import { RegisterKnowledgeComponent } from './components/register-knowledge/register-knowledge.component';
import { ReportHistogramComponent } from './components/report-histogram/report-histogram.component';
import { PerformanceReportComponent } from './components/performance-report/performance-report.component';
import { IdentifiedSpeciesComponent } from './components/identified-species/identified-species.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios',pathMatch: 'full'  },
  { path: 'usuarios', component: KnowledgeListComponent,  },
  { path: 'usuario/agregar', component: RegisterKnowledgeComponent,  },
  { path: 'reporte-histograma', component: ReportHistogramComponent,  },
  { path: 'reporte-desempenio', component: PerformanceReportComponent,  },
  { path: 'especies-identificadas', component: IdentifiedSpeciesComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
