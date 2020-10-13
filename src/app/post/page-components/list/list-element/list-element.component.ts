import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../models/Post';

@Component({
  selector: 'list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
