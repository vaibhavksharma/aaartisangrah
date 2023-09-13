import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage{
detailsPageData: any[];
constructor(private http: HttpClient,private storage: Storage, private route: ActivatedRoute) { 
 this.detailsPageData=[];
}

  async ionViewDidEnter() {
     const id = this.route.snapshot.paramMap.get('id')
    const cachedData = await this.storage.get(`detailsPageData${id}`);

    if (cachedData) {
      // Use cached data if available
      this.detailsPageData = cachedData;
    } else {
      // If no cached data, make the API call and store the result in cache
	  
      this.getdetailsPageData(id);
    }
  }
  
  getdetailsPageData(id) {
/*     this.http.get('http://greatbonanza.com/aarti/getlistofaartis.php').subscribe(data => {
      this.listPageData = data;
	  console.log(data);
    }); */
	
	 const apiUrl =`http://greatbonanza.com/aarti/getaartidetails.php?id=${id}`;
	   this.http.get(apiUrl).subscribe(
      (data: any[]) => {
        this.detailsPageData = data;
        this.storage.set(`detailsPageData${id}`, data); // Store the data in cache
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


}
