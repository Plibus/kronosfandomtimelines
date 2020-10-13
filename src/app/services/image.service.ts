import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Image } from '../models/Image'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = "http://localhost:3000/images/";

  constructor(private http: HttpClient) { }

  fetch(id: number): Observable<Image> {
    return this.http.get<Image>(this.url+id).pipe(
      tap((_) => console.log('fetch post'))
    );
  }

  fetchAll(): Observable<Image[]> {
    return this.http.get<Image[]>(this.url, { responseType: "json" }).pipe(
      tap((_) => console.log('fetch all posts'))
    );
  }

  fetchAllOfFandom(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(this.url+"fandom/"+id, { responseType: "json" }).pipe(
      tap((_) => console.log('fetch all posts'))
    );
  }

  post(data) {
    console.log(this.url)
    return this.http.post<Image>(this.url, data);
  }

  put(data, id: number) {
    return this.http.put<Image>(this.url+id, data);
  }

  delete(id: number) {
    return this.http.delete<Image>(this.url+id, {});
  }
}
