import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
  blooms;
   coForm: FormGroup;
   co:Array<String>;
   isVisible:Boolean;
   isMid:Boolean;
  constructor(
    private dataService:DataService,
     private fb: FormBuilder,
  ) {
    this.isVisible=false;
    this.isMid=false;
   }

  ngOnInit(): void {
    this.co=['CO1','CO2','CO3','CO4','CO5'];
    this.blooms=this.dataService.bloom;
    this.coForm = this.fb.group({
         CO1:[''],
         CO2:[''],
         CO3:[''],
         CO4:[''],
         CO5:[''],
         b1:[''],
         b2:[''],
         b3:[''],
         b4:[''],
         b5:[''],
    });
    this.coForm.valueChanges.subscribe((value) => {
      console.log(this.coForm.value.b1)
    });
  }

  visibility(){
    this.isVisible=true;
  }

  mid(){
    this.isMid=true;
  }
  sem(){
    this.isMid=false;
  }


}
