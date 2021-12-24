import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaperFormatService } from '../paper-format.service';
import jspdf, { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';

@Component({
  selector: 'app-paper-view',
  templateUrl: './paper-view.component.html',
  styleUrls: ['./paper-view.component.css']
})
export class PaperViewComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  paperCOData:any;
  paperPartA:any;
  paperPartB:any;
  isMid;
  reg;
  sem;
  cid;
  date;
  dateFullFormat;
  time;
  marks;
  subject;
  partBImg;
  midNo;
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
    this.midNo=this.paperFormatService.midNo;
    this.date=this.paperFormatService.date;
    this.dateFullFormat=new Date(this.date)
    this.time=this.paperFormatService.time;
    this.marks=this.paperFormatService.marks;
    this.subject=this.paperFormatService.subject;  
    this.isMid=this.paperFormatService.isMid;
    this.paperCOData=this.paperFormatService.coData;
    this.paperPartA=this.paperFormatService.partAData;
    this.paperPartB=this.paperFormatService.midPartBData;
    this.partBImg=this.paperFormatService.partBImgs;
    this.selectedBranches=this.paperFormatService.selectedBranch;
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
    // if(this.isMid){
    //   this.paperPartB=this.paperFormatService.midPartBData;
    // }else{
    //   this.paperPartB=this.paperFormatService.semPartBData;
    // }
  }

  createPdf(){
    const data = document.getElementById('content');
    html2canvas(data).then(canvas => {
    const imgWidth = 208;
    const pageHeight = 295;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const heightLeft = imgHeight;
    const contentDataURL = canvas.toDataURL('image/png');
    const pdf = new jspdf('p', 'mm', 'a4'); 
    const position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('invoice.pdf'); 
    });
  }
}
