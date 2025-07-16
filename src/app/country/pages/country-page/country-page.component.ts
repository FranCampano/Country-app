import { Component, inject, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CountryListComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

countryCode = inject(ActivatedRoute).snapshot.params['code'];
countryService = inject(CountryService);


// variables para manejar mi peticion, que esté cargando y si da error. Y variable de paises.
isLoading = signal (false);
isError = signal<string | null>(null)
countrie = signal<Country[]>([])

onSearch(query: string) {
  if (this.isLoading()) return;

  this.isLoading.set(true);
  this.isError.set(null);

  this.countryService.searchByAlphaCode(query).subscribe({
    next: (country) => {
      this.isLoading.set(false);

      //Si country existe, lo ponemos en un array. Si no, array vacío.
      this.countrie.set(country ? [country] : []);
    },
    error: (err) => {
      this.isLoading.set(false);
      this.countrie.set([]);
      this.isError.set(`No se encontró país con: ${query}`);
      console.error(err);
    },
  });
}

constructor() {
  if (this.countryCode) {
    this.onSearch(this.countryCode);
  }
}


}
