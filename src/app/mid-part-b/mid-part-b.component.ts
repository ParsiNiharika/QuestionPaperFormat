import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaperFormatService } from '../paper-format.service';


@Component({
  selector: 'app-mid-part-b',
  templateUrl: './mid-part-b.component.html',
  styleUrls: ['./mid-part-b.component.css']
})
export class MidPartBComponent implements OnInit {
   blooms: Array<String>;
   partB: FormGroup;
   co:Array<String>;
   imgs={'img1A':[],'img1B':[],'img2A':[],'img2B':[],'img3A':[],'img3B':[],'img4A':[],'img4B':[],'img5A':[],'img5B':[]}
   midPartB;

  constructor(
    private dataService:DataService,
    private fb: FormBuilder,
    private paperFormatService:PaperFormatService
  ) { }

  ngOnInit(): void {
    this.co=['CO1','CO2','CO3','CO4','CO5'];
    this.blooms=this.dataService.bloom;
    this.partB = this.fb.group({
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
    this.partB.valueChanges.subscribe((value) => {
      this.paperFormatService.getMidPartBData(this.partB.value);
    });

    this.midPartB=this.paperFormatService.midPartBData;
    this.partB.setValue({
         Q1A:this.midPartB.Q1A,
         Q1B:this.midPartB.Q1B,
         Q2A:this.midPartB.Q2A,
         Q2B:this.midPartB.Q2B,
         Q3A:this.midPartB.Q3A,
         Q3B:this.midPartB.Q3B,
         Q4A:this.midPartB.Q4A,
         Q4B:this.midPartB.Q4B,
         Q5A:this.midPartB.Q5A,
         Q5B:this.midPartB.Q5B,
         b1A:this.midPartB.b1A,
         b1B:this.midPartB.b1B,
         b2A:this.midPartB.b2A,
         b2B:this.midPartB.b2B,
         b3A:this.midPartB.b3A,
         b3B:this.midPartB.b3B,
         b4A:this.midPartB.b4A,
         b4B:this.midPartB.b4B,
         b5A:this.midPartB.b5A,
         b5B:this.midPartB.b5B,
         CO1A:this.midPartB.CO1A,
         CO1B:this.midPartB.CO1B,
         CO2A:this.midPartB.CO2A,
         CO2B:this.midPartB.CO2B,
         CO3A:this.midPartB.CO3A,
         CO3B:this.midPartB.CO3B,
         CO4A:this.midPartB.CO4A,
         CO4B:this.midPartB.CO4B,
         CO5A:this.midPartB.CO5A,
         CO5B:this.midPartB.CO5B,
         M1A:this.midPartB.M1A,
         M1B:this.midPartB.M1B,
         M2A:this.midPartB.M2A,
         M2B:this.midPartB.M2B,
         M3A:this.midPartB.M3A,
         M3B:this.midPartB.M3B,
         M4A:this.midPartB.M4A,
         M4B:this.midPartB.M4B,
         M5A:this.midPartB.M5A,
         M5B:this.midPartB.M5B,
    })

    this.imgs.img1A=this.paperFormatService.partBImgs.img1A
    this.imgs.img1B=this.paperFormatService.partBImgs.img1B
    this.imgs.img2A=this.paperFormatService.partBImgs.img2A
    this.imgs.img2B=this.paperFormatService.partBImgs.img2B
    this.imgs.img3A=this.paperFormatService.partBImgs.img3A
    this.imgs.img3B=this.paperFormatService.partBImgs.img3B
    this.imgs.img4A=this.paperFormatService.partBImgs.img4A
    this.imgs.img4B=this.paperFormatService.partBImgs.img4B
    this.imgs.img5A=this.paperFormatService.partBImgs.img5A
    this.imgs.img5B=this.paperFormatService.partBImgs.img5B
  }

  

  selectFiles(event,targetImg) {
    if(event.target.files){
      for(var i=0;i<File.length;i++){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) =>{
            this.imgs[targetImg].push(event.target.result);
          }
        this.paperFormatService.getImgs(this.imgs);
        }
      }
    }

    removeFile(targetImg){
      this.imgs[targetImg]=[];
      this.paperFormatService.getImgs(this.imgs);
    }
  }

  
