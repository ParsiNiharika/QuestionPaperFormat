import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-mid-part-b',
  templateUrl: './mid-part-b.component.html',
  styleUrls: ['./mid-part-b.component.css']
})
export class MidPartBComponent implements OnInit {
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
         Q1A:[''],
         Q1B:[''],
         Q2A:[''],
         Q2B:[''],
         Q3A:[''],
         Q3B:[''],
         Q4A:[''],
         Q4B:[''],
         Q5A:[''],
         Q5B:[''],
         b1A:[''],
         b1B:[''],
         b2A:[''],
         b2B:[''],
         b3A:[''],
         b3B:[''],
         b4A:[''],
         b4B:[''],
         b5A:[''],
         b5B:[''],
         CO1A:[''],
         CO1B:[''],
         CO2A:[''],
         CO2B:[''],
         CO3A:[''],
         CO3B:[''],
         CO4A:[''],
         CO4B:[''],
         CO5A:[''],
         CO5B:[''],
         M1A:[''],
         M1B:[''],
         M2A:[''],
         M2B:[''],
         M3A:[''],
         M3B:[''],
         M4A:[''],
         M4B:[''],
         M5A:[''],
         M5B:[''],
    });
    this.coForm.valueChanges.subscribe((value) => {
      console.log(this.coForm.value.b1)
    });
  }

}
