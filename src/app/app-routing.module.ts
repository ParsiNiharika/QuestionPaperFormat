import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPaperComponent } from '../app/question-paper/question-paper.component';
import { HomeComponent } from './home/home.component';
import { PaperViewComponent } from './paper-view/paper-view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:':reg/:sem/:cid', component:QuestionPaperComponent},
  {path:'paperView', component:PaperViewComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
