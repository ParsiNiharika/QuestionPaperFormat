import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {
  blooms;
   coForm: FormGroup;
   co:Array<String>;
  constructor(
    private dataService:DataService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.co=['CO1','CO2','CO3','CO4','CO5'];
    this.blooms=this.dataService.bloom;
    this.coForm = this.fb.group({
         Q1:[''],
         Q2:[''],
         Q3:[''],
         Q4:[''],
         Q5:[''],
         Q6:[''],
         Q7:[''],
         Q8:[''],
         Q9:[''],
         Q10:[''],
         b1:[''],
         b2:[''],
         b3:[''],
         b4:[''],
         b5:[''],
         b6:[''],
         b7:[''],
         b8:[''],
         b9:[''],
         b10:[''],
         CO1:[''],
         CO2:[''],
         CO3:[''],
         CO4:[''],
         CO5:[''],
         CO6:[''],
         CO7:[''],
         CO8:[''],
         CO9:[''],
         CO10:[''],
         M1:[''],
         M2:[''],
         M3:[''],
         M4:[''],
         M5:[''],
         M6:[''],
         M7:[''],
         M8:[''],
         M9:[''],
         M10:[''],
    });
    this.coForm.valueChanges.subscribe((value) => {
      console.log(this.coForm.value.b1)
    });
  }

}
