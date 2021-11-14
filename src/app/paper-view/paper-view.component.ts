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

  constructor(private paperFormatService:PaperFormatService) { }

  ngOnInit(): void {
    
    this.paperCOData=this.paperFormatService.coData;
    this.paperPartA=this.paperFormatService.partAData;
    this.isMid=this.paperFormatService.isMid;
    if(this.isMid){
      this.paperPartB=this.paperFormatService.getMidPartBData;
    }else{
      this.paperPartB=this.paperFormatService.getSemPartBData;
    }
  }
}
