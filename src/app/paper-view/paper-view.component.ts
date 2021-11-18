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
  partBImg;
  isDataAvailable:boolean;
  selectedBranches:Array<string>;
  branchTitle:String;

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
    this.paperPartB=this.paperFormatService.midPartBData;
    this.partBImg=this.paperFormatService.partBImgs;
    this.selectedBranches=this.paperFormatService.selectedBranch;
    console.log(this.paperPartA);
    if(this.selectedBranches.length==1){
      this.branchTitle=this.selectedBranches[0]
    }
    else{
      this.branchTitle="Common to"
      for(var branch of this.selectedBranches){
        this.branchTitle = this.branchTitle.concat(" "+branch+ ",")
      }
      this.branchTitle=this.branchTitle.slice(0, -1);
    }
    console.log(this.branchTitle)
    // if(this.isMid){
    //   this.paperPartB=this.paperFormatService.midPartBData;
    // }else{
    //   this.paperPartB=this.paperFormatService.semPartBData;
    // }
  }
}
