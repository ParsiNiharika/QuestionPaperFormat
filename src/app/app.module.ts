import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PartAComponent } from './part-a/part-a.component';
import { MidPartBComponent } from './mid-part-b/mid-part-b.component';
import { SemPartBComponent } from './sem-part-b/sem-part-b.component';
import { PaperViewComponent } from './paper-view/paper-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionPaperComponent,
    PartAComponent,
    MidPartBComponent,
    SemPartBComponent,
    PaperViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
