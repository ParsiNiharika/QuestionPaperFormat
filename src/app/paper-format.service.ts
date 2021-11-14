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
    console.log("collected data");
    console.log(time);
  }

  getCoData(coForm:any){
     this.coData=coForm;
     console.log(this.coData);
  }
  getPartAData(partAForm:any){
     this.partAData=partAForm;
     console.log("partA");
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
