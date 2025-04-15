import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1'


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCapital( query: string ): Observable<Country[]> {
    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query }`)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),
      catchError( (error) => {
        console.log('Error fetching', error)
        return throwError(
          () => new Error(`No se pudo encontrar país con capital: ${query}`)
        )
      })
    )
  }

  searchByCountry(query: string):Observable<Country[]>{
    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${ query }`)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),
      catchError( (error) => {
        console.log('Error fetching', error)
        return throwError(
          () => new Error(`No se pudo encontrar país con nombre: ${query}`)
        )
      })
    )
  }
  searchCountryByAlphaCode(code: string){

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${ code }`)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),
      map( countries => countries.at(0)),
      catchError( (error) => {
        console.log('Error fetching', error)
        return throwError(
          () => new Error(`No se pudo encontrar país con ese código: ${code}`)
        )
      })
    )
  }
}
