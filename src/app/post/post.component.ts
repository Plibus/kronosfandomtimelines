import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  protected edit: boolean;
  protected fandomId: number;
  protected id: number;
  protected type: string;
  protected catagory: string;
  post: Post = {} as any;

  constructor(protected route: ActivatedRoute, protected http: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.setID(params.id);
      this.setFandomId(params.fandomId); 
      this.setType(params.type);
      this.setCatagory(params.catagory);
      this.setEdit(params.edit);
      this.http.fetch(this.id).subscribe(
        data=>{
          this.post= data[0][0];  
          if (this.edit == false) {
            this.http.viewed(this.id).subscribe(
              response => console.log('success', response),
              error=> console.log('error', error)
            );
          }
        }
      );
    });
  }

  getEdit() {
    return this.edit;
  }

  setEdit(edit: boolean) {
    this.edit = edit;
  }

  getID() {
    return this.id;
  }

  setID(id: number) {
    this.id = id;
  }

  getFandomId() {
    return this.fandomId;
  }

  setFandomId(fandomId: number) {
    this.fandomId = fandomId;
  }

  getType() {
    return this.type;
  }

  setType(type: string) {
    this.type = type;
  }

  getCatagory() {
    return this.catagory;
  }

  setCatagory(catagory: string) {
    this.catagory = catagory;
  }
}