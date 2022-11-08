import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeListComponent } from './components/list-knowledge/list-knowledge.component';
import { RegisterKnowledgeComponent } from './components/register-knowledge/register-knowledge.component';
import { ReportHistogramComponent } from './components/report-histogram/report-histogram.component';
import { PerformanceReportComponent } from './components/performance-report/performance-report.component';
import { IdentifiedSpeciesComponent } from './components/identified-species/identified-species.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',pathMatch: 'full'  },
  { path: 'usuarios', component: KnowledgeListComponent,  },
  { path: 'usuario/agregar', component: RegisterKnowledgeComponent,  },
  { path: 'reporte-histograma', component: ReportHistogramComponent,  },
  { path: 'linea-tiempo', component: PerformanceReportComponent,  },
  { path: 'especies-identificadas', component: IdentifiedSpeciesComponent,  },
  { path: 'login', component: LoginComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
