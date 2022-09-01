import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeListComponent } from './components/list-knowledge/list-knowledge.component';
import { RegisterKnowledgeComponent } from './components/register-knowledge/register-knowledge.component';

const routes: Routes = [
  { path: '', redirectTo: 'user',pathMatch: 'full'  },
  { path: 'user', component: KnowledgeListComponent,  },
  { path: 'user/add', component: RegisterKnowledgeComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
