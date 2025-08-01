import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [DecimalPipe,RouterLink],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

countries = input.required<Country[]>()

errorMessage=input<unknown|null>();
isLoadingList=input<boolean>(false);
isEmpty=input<boolean>(false);

 }
