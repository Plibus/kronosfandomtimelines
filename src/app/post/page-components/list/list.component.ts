import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/Post';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { PostService } from '../../../services/post.service'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() fandomId: number;
  @Input() catagory: string;
  @Input() type: string;
  posts$: Observable<Post[]>

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPostsData();
    this.searchList();
  }

  getPostsData() {
    if (this.fandomId !== undefined) {
      console.log("fandomId != undefined");
      if (this.catagory !== undefined) {
        console.log("catagory != undefined");
        console.log("Catagory:" + this.catagory)
        this.posts$ = this.postService.fetchAllOfFromFandomOfType(this.fandomId, this.catagory);
      } else {
        console.log("catagory = undefined");
        this.catagory = 'article'
        this.type = 'post';
        this.posts$ = this.postService.fetchAllOfFandom(this.fandomId);
      }
    } else {
      console.log("fandomId = undefined");
      this.fandomId = -1;
      this.catagory = 'fandom';
      this.type = 'fandom';
      console.log(this.posts$)
      this.posts$ = this.postService.fetchAllOf('fandom');
      console.log(this.posts$)
    }
  }

  searchList() {
    $(document).ready(function () {
      $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#list li").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }

  sortList(order: boolean) {
    this.sortAlphabetatically(order);
  }

  sortAlphabetatically(order: boolean) {
    var ul = document.getElementById("#list");
    var lis = ul.getElementsByTagName("li");
    var vals = [];

    // Populate the array
    for(var i = 0, l = lis.length; i < l; i++)
    vals.push(lis[i].innerHTML);

    // Sort it
    vals.sort();

    // Sometimes you gotta DESC
    if(order) {
      vals.reverse();
    }

    // Change the list on the page
    for(var i = 0, l = lis.length; i < l; i++) {
      lis[i].innerHTML = vals[i];
    }
  }

  sortCreated(order: boolean) {

  }

  sortUpdated(order: boolean) {

  }

  sortViews(order: boolean) {

  }

  sortLikes(order: boolean) {

  }
}
