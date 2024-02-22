import { Component } from '@angular/core';
import { DataService } from '../generate-grid.service';

@Component({

  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
})
export class FormComponent {
  x: number = 4;
  y: number = 4;
  dna: string[];
  private dataService : DataService;
  constructor(dataService: DataService) 
  {
    this.dna = []
    this.dataService = dataService;
  }

  generate() {
    this.dataService.sendData(this.x, this.y);
    this.dataService.triggerBuildGrid() // The grid is spawned
  }
}
