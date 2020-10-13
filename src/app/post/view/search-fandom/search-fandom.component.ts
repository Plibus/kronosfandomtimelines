import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-search-fandom',
  templateUrl: './search-fandom.component.html',
  styleUrls: ['./search-fandom.component.css']
})
export class SearchFandomComponent implements OnInit {

  id: number;
  name: string;
  type: string;
  catagory: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.name = params.name;
      this.type = params.type;
      this.catagory = params.catagory;
    });
  }
}
