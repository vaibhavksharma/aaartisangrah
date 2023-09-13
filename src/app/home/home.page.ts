import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
homePageData: any;
 constructor(private http: HttpClient) {}
 
   ngOnInit() {
    this.gethomePageData();
  }
gethomePageData() {
    this.http.get('http://greatbonanza.com/aarti/getdata.php').subscribe(data => {
      this.homePageData = data;
	  console.log(data);
    });
  }
}







