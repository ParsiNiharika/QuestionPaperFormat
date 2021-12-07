import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaperFormatService } from '../paper-format.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  coData;
  constructor(
    private dataService:DataService,
     private fb: FormBuilder,
     private paperFormatService:PaperFormatService,
     private router: Router
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
    this.coData=this.paperFormatService.coData
    this.coForm.setValue({
      CO1: this.coData.CO1,
      CO2: this.coData.CO2,
      CO3: this.coData.CO3,
      CO4: this.coData.CO4,
      CO5: this.coData.CO5,
      b1: this.coData.b1,
      b2: this.coData.b2,
      b3: this.coData.b3,
      b4: this.coData.b4,
      b5: this.coData.b5,
    });

    this.coForm.valueChanges.subscribe((value) => {
      for(let i in this.coForm.value){
        if(this.coForm.value[i]==undefined){
          this.coForm.value[i]=" ";
        }
      }
      this.paperFormatService.getCoData(this.coForm.value);
    });
  }

  visibility(){
    this.isVisible=true;
  }

  mid(){
    this.isMid=true;
    this.paperFormatService.checkIsMid(this.isMid);
  }
  sem(){
    this.isMid=false;
    this.paperFormatService.checkIsMid(this.isMid);
  }
  moveToPaper(){
    this.router.navigateByUrl('/paperView');
  }

}
