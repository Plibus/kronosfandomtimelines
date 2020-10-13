import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service'

@Component({
  selector: 'default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  @Input() id: number;
  @Input() fandomId: number;
  @Input() type: string;
  post: Post = {} as any;
  

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.fetch(this.id).subscribe(
      data=>{
        this.post= data[0][0]; 
      }
    );
  }
}
