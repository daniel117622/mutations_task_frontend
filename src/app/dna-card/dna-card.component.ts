import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dna-card', // Use the app-letter-box selector to use the component
  templateUrl: './dna-card.component.html',
  styleUrls: ['./dna-card.component.css']
})
export class DnaCardComponent implements OnInit {
  available_bases = ['A', 'C', 'G', 'T'];
  selected_base: string; // This will store your selected base
  currentIndex = 0;
  constructor() {
    this.currentIndex = this.seededRandom() % this.available_bases.length;
    this.selected_base = this.available_bases[this.currentIndex];
  }

  ngOnInit(): void {
  }

  onBaseClick(): void {
    this.currentIndex = (this.currentIndex + 1) % this.available_bases.length;
    this.selected_base = this.available_bases[this.currentIndex]; 
   }

  seededRandom(): number {
    // Use a simple time-based seed to modify the random behavior
    let seed = new Date().getTime();
    let x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * this.available_bases.length);
  }
  getColor(): string {
    switch (this.selected_base) {
      case 'A': return '#ffcccc'; // Light red for A
      case 'C': return '#ccffcc'; // Light green for C
      case 'G': return '#ccccff'; // Light blue for G
      case 'T': return '#ffffcc'; // Light yellow for T
      default: return '#ffffff'; // Default to white
    }
  }
}
