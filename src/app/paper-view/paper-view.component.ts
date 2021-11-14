import { Component, OnInit } from '@angular/core';
import { PaperFormatService } from '../paper-format.service';

@Component({
  selector: 'app-paper-view',
  templateUrl: './paper-view.component.html',
  styleUrls: ['./paper-view.component.css']
})
export class PaperViewComponent implements OnInit {
  paperCOData:any;
  paperPartA:any;
  paperPartB:any;
  isMid;
  reg;
  sem;
  cid;
  date;
  time;
  marks;
  subject;
  isDataAvailable:boolean;

  constructor(private paperFormatService:PaperFormatService) { 
    this.isDataAvailable=false
  }

  ngOnInit(): void {
    this.reg=this.paperFormatService.reg;
    this.sem=this.paperFormatService.sem;
    this.cid=this.paperFormatService.cid;
    this.date=this.paperFormatService.date;
    this.time=this.paperFormatService.time;
    this.marks=this.paperFormatService.marks;
    this.subject=this.paperFormatService.subject;  
    this.isMid=this.paperFormatService.isMid;
    this.paperCOData=this.paperFormatService.coData;
    this.paperPartA=this.paperFormatService.partAData;
    console.log(this.paperCOData);
    if(this.isMid){
      this.paperPartB=this.paperFormatService.midPartBData;
    }else{
      this.paperPartB=this.paperFormatService.semPartBData;
    }
  }
}
