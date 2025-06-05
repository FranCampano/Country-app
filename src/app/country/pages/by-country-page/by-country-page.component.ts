import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
countryService = inject(CountryService);
// variables para manejar mi peticion, que esté cargando y si da error. Y variable de paises.
isLoading = signal (false);
isError = signal<string | null>(null)
countries = signal<Country[]>([])

  onSearch(query:string){
    if (this.isLoading() ) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCountry(query)
    .subscribe({
    next: (countries) => {
    this.isLoading.set(false);
    this.countries.set(countries);
    },
    error: (err)=>{
    this.isLoading.set(false);
    this.countries.set([]);
    this.isError.set(`No se encontró país/es con: ${query}`);
    console.log(`No se encontró país/es con: ${query}`);
    }

    } );

  }

 }
