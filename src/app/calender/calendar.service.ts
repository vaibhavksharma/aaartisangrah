import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface CalendarCustomEvent {
  date: string;
  description: string;
  title:string;
}

@Injectable()
export class CalendarService {

  constructor(private http: HttpClient) { }

  getCalendarValues(month: string, year: string): Promise<any> {
    return this.http.get(`https://greatbonanza.com/aarti/geteventsfrmcalender.php?monthname=${month}&year=${year}`).toPromise();
  }
}
