import { Component } from '@angular/core';
import { DataService } from '../generate-grid.service'; // Ensure the path is correct

@Component({
  selector: 'app-submit-genome',
  templateUrl: './submit-genome.component.html',
  styleUrls: ['./submit-genome.component.css'] // Corrected styleUrl to styleUrls
})
export class SubmitGenomeComponent {
  gridState: string[] = new Array();
  xlen : number = 0
  constructor(private dataService: DataService) 
  {
    this.dataService = dataService
    this.dataService.getData().subscribe(data => {
      // Assuming 'data' has a property 'x'
      this.xlen = data.x;
      // If you want to do something with the gridState here based on x, you can
    });
  }

  sendGenome() {
    const genomeElement = document.getElementById('genome');
    if (genomeElement)
    {
      let total_string = ""
      const childDivs = genomeElement.querySelectorAll('div');
      childDivs.forEach((div, index) => {
        total_string += div.textContent?.trim();
        
      });
      const n = this.xlen;
      let dividedString = [];
    
      // Dividing total_string into substrings of length n
      for (let i = 0; i < total_string.length; i += n) {
        dividedString.push(total_string.substring(i, i + n));
      }
      // The string is sent to the backend
      console.log(dividedString);
      const url = 'http://18.220.132.16/mutation';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({"dna": Object.assign([], dividedString) }), // Assuming the server expects an object with the dividedString property
      };
    
      fetch(url, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Assuming the server responds with JSON
        })
        .then(data => {
          let lbl = document.getElementById("lbl_result")
          if (lbl) 
          {
            lbl.style.color = "green"
            lbl.textContent = "Base is Ok"
          }
          console.log('Response:', data);
        })
        .catch(error => {
          let lbl = document.getElementById("lbl_result")
          if (lbl) 
          {
            lbl.style.color = "red"
            lbl.textContent = "Mutation detected"
          }          
        });      
    }


  }
}
