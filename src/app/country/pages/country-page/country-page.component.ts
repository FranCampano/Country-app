import { Component, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CountryListComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  countries = signal<Country[]>([]);


}
