import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { Catagory } from '../../../models/Catagory';
import { PostService } from '../../../services/post.service'

@Component({
  selector: 'fandom',
  templateUrl: './fandom.component.html',
  styleUrls: ['./fandom.component.css']
})
export class FandomComponent implements OnInit {

  @Input() id: number;
  post: Post = {} as any;
  catagory: string = 'fandom';

  constructor(private postService: PostService) { }

  //new Catagory('Maps','map','map'), new Catagory('Timelines','timeline','timeline')
  catagories: Catagory[] = [new Catagory('Articles','article','post'), new Catagory('Characters','character','post'), new Catagory('Events','event','post'), new Catagory('Geography','geography','post')]

  ngOnInit(): void {
    this.postService.fetch(this.id).subscribe(
      data=>{
        this.post= data[0][0];  
        this.postService.viewed(this.id).subscribe(
          response => console.log('success', response),
          error=> console.log('error', error)
        );
      }
    );
  }

  testReturn(test: string) {
    return test;
  }

  getImageURL(cat: string) {
    return '../../assets/catagory/'+cat+'.jpg';
  }
  
}