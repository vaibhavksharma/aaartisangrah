import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aartidetails',
  templateUrl: './aartidetails.page.html',
  styleUrls: ['./aartidetails.page.scss'],
})
export class AartidetailsPage implements OnInit {
constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log(id);
  }

}
