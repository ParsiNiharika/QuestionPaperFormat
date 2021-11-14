import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperFormatService {
  reg;
  sem;
  cid;
  date;
  time;
  marks;
  coData;
  partAData;
  semPartBData;
  midPartBData;
  isMid=false;
  constructor() { }

  getPaperMetaData(reg,sem,cid,date,time,marks){
    this.reg=reg;
    this.sem=sem;
    this.cid=cid;
    this.date=date;
    this.time=time;
    this.marks=marks;  
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
}
