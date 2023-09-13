import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  search(text: string) {
    return this.http.get(`https://greatbonanza.com/aarti/getsearchresults.php?query=${text}`);
  }
}
