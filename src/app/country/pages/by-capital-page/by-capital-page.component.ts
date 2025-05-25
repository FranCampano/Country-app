import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
countryService = inject(CountryService);

// variables para manejar mi peticion, que esté cargando y si da error. Y variable de paises.
isLoading = signal (false);
isError = signal<string | null>(null)
countries = signal<Country[]>([])

  onSearch(query:string){
    if (this.isLoading() ) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
    .subscribe(countries => {
    this.isLoading.set(false);
    this.countries.set(countries);


    console.log(countries);
    } );

  }

 }
