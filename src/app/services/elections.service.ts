import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  constructor(private http: HttpClient) { }

  getAll() {
	  return this.http.get(baseUrl.toString() + "/elections", {'headers': headers});
  }
  searchAll(title) {
	  return this.http.get(baseUrl.toString() + "/elections?search="+title, {'headers': headers});
  }
  orderByVoteCount() {
	  return this.http.get(baseUrl.toString() + "/elections?order=true", {'headers': headers});
  }
  sortByLatest() {
	  return this.http.get(baseUrl.toString() + "/elections?sort=true", {'headers': headers});
	}
}
