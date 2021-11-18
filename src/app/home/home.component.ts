import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaperFormatService } from '../paper-format.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: Array<String>;
  courseIds;
  subject;
  semester;
  sem;
  reg;
  cid;
  time;
  marks;
  date;
  urls=[];
  selectedBranch:Array<String>=[];
  branches=["Computer Science & Engineering", "Information Technology", "Electronics & Communication Engineering", "Electrical & Electronics Engineering", "Mechnical Engineering", "Civil Engineering", "Artificial Intelligence & Machine Learning", "Artificial Intelligence & Data Science" ];
  constructor(private dataService: DataService, private router: Router,private paperFormatService:PaperFormatService) {}

  ngOnInit(): void {
    this.data = this.dataService.regulations;
    this.semester = this.dataService.semester;
    console.log(this.data);
  }

  getRegulation(reg) {
    console.log(reg);
    this.reg = reg;
    this.courseIds = this.dataService.courseId[reg];
    console.log(this.courseIds);
  }
  getCourseId(id) {
    this.cid = id;
    this.subject = this.dataService.subjects[id];
  }

  getSem(sem) {
    this.sem = sem;
  }
 
  go() {
    console.log('Hello');
    var date:any=document.getElementById("date");
    var time:any =document.getElementById("time");
    var marks:any=document.getElementById("marks");
    this.paperFormatService.getPaperMetaData(this.reg,this.sem,this.cid,date.value,time.value,marks.value, this.selectedBranch);
    this.router.navigate([this.reg, this.sem, this.cid]);
  }
   
  checkBoxValue(branchName, isChecked){
    if (isChecked) {
      this.selectedBranch.push(branchName);
    } else {
      this.selectedBranch = this.selectedBranch.filter(item => item !== branchName)
    }
    console.log(this.selectedBranch)
  }  

  
}
