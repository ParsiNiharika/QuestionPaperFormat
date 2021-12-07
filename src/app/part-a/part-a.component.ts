import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaperFormatService } from '../paper-format.service';

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {
   blooms;
   partA: FormGroup;
   co:Array<String>;
  midPartA;
  constructor(
    private dataService:DataService,
    private fb: FormBuilder,
    private paperFormatService:PaperFormatService
  ) { }

  ngOnInit(): void {
    this.co=['CO1','CO2','CO3','CO4','CO5'];
    this.blooms=this.dataService.bloom;
    this.partA = this.fb.group({
         Q1:[''],
         Q2:[''],
         Q3:[''],
         Q4:[''],
         Q5:[''],
         b1:[''],
         b2:[''],
         b3:[''],
         b4:[''],
         b5:[''],
         CO1:[''],
         CO2:[''],
         CO3:[''],
         CO4:[''],
         CO5:[''],
         M1:[''],
         M2:[''],
         M3:[''],
         M4:[''],
         M5:[''],
    });

    this.midPartA=this.paperFormatService.partAData;
    this.partA.setValue({
         Q1:this.midPartA.Q1,
         Q2:this.midPartA.Q2,
         Q3:this.midPartA.Q3,
         Q4:this.midPartA.Q4,
         Q5:this.midPartA.Q5,
         b1:this.midPartA.b1,
         b2:this.midPartA.b2,
         b3:this.midPartA.b3,
         b4:this.midPartA.b4,
         b5:this.midPartA.b5,
         CO1:this.midPartA.CO1,
         CO2:this.midPartA.CO2,
         CO3:this.midPartA.CO3,
         CO4:this.midPartA.CO4,
         CO5:this.midPartA.CO5,
         M1:this.midPartA.M1,
         M2:this.midPartA.M2,
         M3:this.midPartA.M3,
         M4:this.midPartA.M4,
         M5:this.midPartA.M5,
    })
    this.partA.valueChanges.subscribe((value) => {
      for(let i in this.partA.value){
        if(this.partA.value[i]==undefined){
          this.partA.value[i]=" ";
        }
      }
      this.paperFormatService.getPartAData(this.partA.value);
    });
  }

}
