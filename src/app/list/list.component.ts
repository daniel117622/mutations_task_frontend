import { Component, OnInit } from '@angular/core';

interface RequestStat {
  hash: string;
  data: string[];
  result: string;
  date_initiated: number;
  date_completed: number;
} // Estructura de los datos de ese endpoint

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  stats: RequestStat[] = []
  constructor() {}
  ngOnInit(): void {
    this.loadStats();
  }
  loadStats() {
    fetch('http://18.220.132.16/list')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // or response.json() if the response is JSON
    })
    .then(data => {
      this.stats = data
      console.log(data)
    })
    .catch(error => {
      console.error('Error fetching stats:', error);
    });
  }
}
