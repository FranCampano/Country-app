import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  onSearch(value:string){
console.log({value});
  }

 }
