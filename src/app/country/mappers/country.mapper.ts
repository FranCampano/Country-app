import type{ Country } from "../interfaces/country.interface";
import type{ RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper{



  static mapRestCountryToCountry(restCountry:RESTCountry): Country{

    return{
capital: Array.isArray(restCountry.capital) ? restCountry.capital.join(', ') : 'No capital',
    cca2:restCountry.cca2,
    flag:restCountry.flag,
    flagSvg:restCountry.flags.svg,
    name:restCountry.translations['spa'].common ?? 'No Spanish Name',   //para sacar el nombre pero en español.
    population:String(restCountry.population)
    }

  }


static mapRestCountryArrayToCountryArray(restCountries:RESTCountry[]):Country[]{

return restCountries.map(this.mapRestCountryToCountry);
}



}
