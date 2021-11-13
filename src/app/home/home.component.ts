import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private dataService: DataService, private router: Router) {}

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
    this.router.navigate([this.reg, this.sem, this.cid]);
  }
}
