import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../generate-grid.service'; // Update the path accordingly


@Component({
  selector: 'app-grid-builder',
  templateUrl: './grid-builder.component.html',
  styleUrl: './grid-builder.component.css'
})
export class GridBuilderComponent implements OnInit, OnDestroy {
  data: { x: number; y: number } = {x: 0, y: 0}; // Default values or could be undefined
  private subscription: Subscription = new Subscription();
  
  constructor(private dataService: DataService) 
  {
    this.dataService = dataService;
    console.log(this.data)
  }

  buildGrid()
  {
    console.log(this.data)
  }

  ngOnInit() {
    this.subscription = this.dataService.getData().subscribe({
      next: (data) => {
        this.data = data;
      },
      // Optionally handle errors and completion
      error: (error) => console.error('An error occurred:', error),
      complete: () => console.log('Observable completed'),
    });
    this.dataService.getBuildGridTrigger().subscribe(() => {
      this.buildGrid();
    });
  }
  triggerBuild() {
    this.dataService.triggerBuildGrid();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  get gridArray(): any[] {
    return Array(this.data.x * this.data.y).fill(0); 
  }
  calcWidth(x: number): string {
    let width = x * 4 + (x - 1) * 0.5;
    return `${width}rem`; 
  }
}