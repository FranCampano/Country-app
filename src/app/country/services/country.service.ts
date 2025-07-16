import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

private http= inject(HttpClient);


searchByCapital(query:string):Observable<Country[]> {
query= query.toLowerCase();

return this.http.get<RESTCountry[]>(`${ API_URL }/capital/${ query }`)
.pipe(
  map((resp)=> CountryMapper.mapRestCountryArrayToCountryArray(resp)));


}

searchByCountry(query:string):Observable<Country[]>{
query= query.toLowerCase();

return this.http.get<RESTCountry[]>(`${ API_URL }/name/${ query }`)
.pipe(
  map((resp)=> CountryMapper.mapRestCountryArrayToCountryArray(resp)),
  delay(2000),
catchError((error) =>{
  console.log('Error fetching', error);
  return throwError(
    () => new Error (`No se pudo obtener resultados con: ${query}`)
  );
} )
);

}



searchByAlphaCode(code:string){

return this.http.get<RESTCountry[]>(`${ API_URL }/alpha/${ code }`)
.pipe(
  map((resp)=> CountryMapper.mapRestCountryArrayToCountryArray(resp)),
  map((countries) => countries.at(0)),  //mapeo para recibir solo el país que necesito para mostrar más información.
catchError((error) =>{
  console.log('Error fetching', error);
  return throwError(
    () => new Error (`No se pudo obtener resultados con: ${code}`)
  );
} )
);

}

}
