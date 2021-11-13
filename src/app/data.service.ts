import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  regulations: Array<String> = ['R19', 'R18', 'R17', 'R16'];
  courseId: any = {
    R19: ['A', 'B', 'C', 'D'],
    R18: ['P', 'Q', 'C', 'D'],
    R17: ['A', 'B', '1', '2'],
    R16: ['1', 'B', 'C', 'D'],
  };
  subjects = { A: 'ABCDE', B: 'QWE', C: 'CDE', D: 'DEF', P: 'PEQR', Q: 'QREW' };
  semester = [
    'I-B.Tech-I-Semester',
    'I-B.Tech-II-Semester',
    'II-B.Tech-I-Semester',
    'II-B.Tech-II-Semester',
    'III-B.Tech-I-Semester',
    'III-B.Tech-II-Semester',
    'IV-B.Tech-I-Semester',
    'IV-B.Tech-II-Semester',
  ];
  bloom=['L1','L2','L3','L4','L5'];
}
