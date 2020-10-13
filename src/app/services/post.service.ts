import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/Post'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  
  private url = "http://localhost:3000/posts/";

  constructor(private http: HttpClient) { }

  fetch(id: number): Observable<Post> {
    return this.http.get<Post>(this.url+id).pipe(
      tap((_) => console.log('fetch post'))
    );
  }

  fetchAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url, { responseType: "json" }).pipe(
      tap((_) => console.log('fetch all posts'))
    );
  }

  fetchAllOf(type: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url+"type/"+type, { responseType: "json" }).pipe(
      tap((_) => console.log('fetch all posts'))
    );
  }

  fetchAllOfFandom(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.url+"fandom/"+id, { responseType: "json" }).pipe(
      tap((_) => console.log('fetch all posts'))
    );
  }

  fetchAllOfFromFandomOfType(fandomId: number, catagory: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url+"fandom/"+fandomId+"/"+catagory, { responseType: "json" }).pipe(
      tap((_) => console.log('fetch all posts'))
    );
  }

  post(data) {
    return this.http.post<Post>(this.url, data);
  }

  put(data, id: number) {
    return this.http.put<Post>(this.url+id, data);
  }

  viewed(id: number) {
    return this.http.put<Post>(this.url+"views/"+id, {});
  }
}