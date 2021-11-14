import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaperFormatService } from '../paper-format.service';

@Component({
  selector: 'app-sem-part-b',
  templateUrl: './sem-part-b.component.html',
  styleUrls: ['./sem-part-b.component.css']
})
export class SemPartBComponent implements OnInit {
  blooms;
   coForm: FormGroup;
   co:Array<String>;

  constructor(
    private dataService:DataService,
    private fb: FormBuilder,
    private paperFormatService:PaperFormatService
  ) { }

  ngOnInit(): void {
    this.co=['CO1','CO2','CO3','CO4','CO5'];
    this.blooms=this.dataService.bloom;
    this.coForm = this.fb.group({
         Q1A:[''],
         Q1B:[''],
         Q1C:[''],
         Q1D:[''],
         Q2A:[''],
         Q2B:[''],
         Q2C:[''],
         Q2D:[''],
         Q3A:[''],
         Q3B:[''],
         Q3C:[''],
         Q3D:[''],
         Q4A:[''],
         Q4B:[''],
         Q4C:[''],
         Q4D:[''],
         Q5A:[''],
         Q5B:[''],
         Q5C:[''],
         Q5D:[''],
         b1A:[''],
         b1B:[''],
         b1C:[''],
         b1D:[''],
         b2A:[''],
         b2B:[''],
         b2C:[''],
         b2D:[''],
         b3A:[''],
         b3B:[''],
         b3C:[''],
         b3D:[''],
         b4A:[''],
         b4B:[''],
         b4C:[''],
         b4D:[''],
         b5A:[''],
         b5B:[''],
         b5C:[''],
         b5D:[''],
         CO1A:[''],
         CO1B:[''],
         CO1C:[''],
         CO1D:[''],
         CO2A:[''],
         CO2B:[''],
         CO2C:[''],
         CO2D:[''],
         CO3A:[''],
         CO3B:[''],
         CO3C:[''],
         CO3D:[''],
         CO4A:[''],
         CO4B:[''],
         CO4C:[''],
         CO4D:[''],
         CO5A:[''],
         CO5B:[''],
         CO5C:[''],
         CO5D:[''],
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
         M1C:[''],
         M1D:[''],
         M2C:[''],
         M2D:[''],
         M3C:[''],
         M3D:[''],
         M4C:[''],
         M4D:[''],
         M5C:[''],
         M5D:[''],
    });
    this.coForm.valueChanges.subscribe((value) => {
      this.paperFormatService.getSemPartBData(this.coForm.value);
    });
  }

}
