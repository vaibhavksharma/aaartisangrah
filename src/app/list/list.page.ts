import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage{
listPageData: any[];
 constructor(private http: HttpClient, private storage: Storage,private route: ActivatedRoute) {

 this.listPageData=[];
 }
 

  async ionViewDidEnter() {
     const id = this.route.snapshot.paramMap.get('id')
    const cachedData = await this.storage.get(`listPageData${id}`);

    if (cachedData) {
      // Use cached data if available
      this.listPageData = cachedData;
    } else {
      // If no cached data, make the API call and store the result in cache
	  
      this.getaartListPageData(id);
    }
  }
  
  getaartListPageData(id) {
/*     this.http.get('http://greatbonanza.com/aarti/getlistofaartis.php').subscribe(data => {
      this.listPageData = data;
	  console.log(data);
    }); */
	
	 const apiUrl =`http://greatbonanza.com/aarti/getlistofaartis.php?id=${id}`;
	   this.http.get(apiUrl).subscribe(
      (data: any[]) => {
        this.listPageData = data;
        this.storage.set(`listPageData${id}`, data); // Store the data in cache
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }

}
