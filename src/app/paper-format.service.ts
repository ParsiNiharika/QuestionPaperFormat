import { Injectable } from '@angular/core';

import { DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PaperFormatService {
  reg;
  sem;
  cid;
  date;
  time;
  subject;
  marks;
  semPartBData;
  coData={ CO1:[''], CO2:[''], CO3:[''], CO4:[''], CO5:[''],
            b1:[''], b2:[''], b3:[''], b4:[''], b5:[''],};

  partAData={ Q1:[''], Q2:[''], Q3:[''], Q4:[''], Q5:[''],
              b1:[''], b2:[''], b3:[''], b4:[''], b5:[''],
              CO1:[''], CO2:[''], CO3:[''], CO4:[''], CO5:[''],
              M1:[''], M2:[''], M3:[''], M4:[''], M5:[''],};
   midPartBData={
         Q1A:[''], Q1B:[''],
         Q2A:[''], Q2B:[''],
         Q3A:[''], Q3B:[''],
         Q4A:[''], Q4B:[''],
         Q5A:[''], Q5B:[''],
         b1A:[''], b1B:[''],
         b2A:[''], b2B:[''],
         b3A:[''], b3B:[''],
         b4A:[''], b4B:[''],
         b5A:[''], b5B:[''],
         CO1A:[''], CO1B:[''],
         CO2A:[''], CO2B:[''],
         CO3A:[''], CO3B:[''],
         CO4A:[''], CO4B:[''],
         CO5A:[''], CO5B:[''],
         M1A:[''], M1B:[''],
         M2A:[''], M2B:[''],
         M3A:[''], M3B:[''],
         M4A:[''], M4B:[''],
         M5A:[''], M5B:[''],
  };
  midNo;
  isMid=false;
  partBImgs={'img1A':[],'img1B':[],'img2A':[],'img2B':[],'img3A':[],'img3B':[],'img4A':[],'img4B':[],'img5A':[],'img5B':[]};
  selectedBranch=[];
  constructor( private dataService:DataService) { }

  getPaperMetaData(reg,sem,midNo,cid,date,time,marks,selectedBranch){
    this.reg=reg;
    this.sem=sem;
    this.cid=cid;
    this.midNo=midNo;
    this.subject=this.dataService.subjects[cid];
    this.date=date;
    this.time=time;
    this.marks=marks; 
    this.selectedBranch=selectedBranch; 
  }

  getCoData(coForm:any){
     this.coData=coForm;  
  }

  getPartAData(partAForm:any){
     this.partAData=partAForm; 
  }
  getSemPartBData(partBForm:any){
    this.semPartBData=partBForm;
  }
  getMidPartBData(partBForm:any){
    this.midPartBData=partBForm;
  }
  checkIsMid(isMid){
    this.isMid=isMid;
  }
  getImgs(partBImgs){
    this.partBImgs=partBImgs
  }
}
