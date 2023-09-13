import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aartilist',
  templateUrl: './aartilist.page.html',
  styleUrls: ['./aartilist.page.scss'],
})
export class AartilistPage implements OnInit {
aartListPageData: any;
 constructor(private http: HttpClient) {}
 

  ngOnInit() {
      this.getaartListPageData();
  }
  
  getaartListPageData() {
    this.http.get('http://greatbonanza.com/aarti/getlistofaartis.php').subscribe(data => {
      this.aartListPageData = data;
	  console.log(data);
    });
  }

}
