import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    this.loadStats();
  }
  loadStats() {
    fetch('http://18.220.132.16/stats')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // or response.json() if the response is JSON
    })
    .then(data => {
      let lbl_nonmutated = document.getElementById("non-mutated")
      let lbl_mutated = document.getElementById("mutated")
      let lbl_ratio = document.getElementById("ratio")
      console.log(data)
      if (lbl_nonmutated) {lbl_nonmutated.textContent = data["states"]["OK"]}
      if (lbl_mutated) {lbl_mutated.textContent = data["states"]["MUTATED"]}
      if (lbl_ratio) {lbl_ratio.textContent =( data["states"]["OK"] / (data["states"]["MUTATED"] + data["states"]["OK"]) ).toFixed(3).toString()}
    })
    .catch(error => {
      console.error('Error fetching stats:', error);
    });
  }
}
